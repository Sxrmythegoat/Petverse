
import express from 'express';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';
import http from 'node:http';
import crypto from 'node:crypto';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import Database from 'better-sqlite3';
import { Server } from 'socket.io';

const root = path.dirname(fileURLToPath(import.meta.url));
const app = express();
const server = http.createServer(app);
const io = new Server(server);
const db = new Database(path.join(root, 'data.sqlite'));
const port = Number(process.env.PORT) || 3000;

db.pragma('journal_mode = WAL');

db.exec(`
  CREATE TABLE IF NOT EXISTS users (
    id TEXT PRIMARY KEY,
    username TEXT UNIQUE NOT NULL,
    age_confirmed INTEGER NOT NULL,
    code TEXT NOT NULL,
    verified INTEGER NOT NULL DEFAULT 0,
    points INTEGER NOT NULL DEFAULT 1000,
    created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
  );

  CREATE TABLE IF NOT EXISTS activity (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    user_id TEXT NOT NULL,
    kind TEXT NOT NULL,
    detail TEXT NOT NULL,
    delta INTEGER NOT NULL DEFAULT 0,
    created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
  );
`);

app.disable('x-powered-by');
app.use(helmet({ contentSecurityPolicy: false }));
app.use(express.json({ limit: '20kb' }));
app.use(rateLimit({ windowMs: 60_000, limit: 120 }));

// Serve index.html, app.js and style.css from the repository root.
app.use(express.static(root));

app.get('/', (req, res) => {
  res.sendFile(path.join(root, 'index.html'));
});

const usernameClean = value =>
  String(value || '').trim().replace(/^@/, '').toLowerCase();

const getUser = id =>
  db.prepare(`
    SELECT id, username, age_confirmed, verified, points
    FROM users WHERE id = ?
  `).get(id);

const logActivity = (id, kind, detail, delta = 0) =>
  db.prepare(`
    INSERT INTO activity (user_id, kind, detail, delta)
    VALUES (?, ?, ?, ?)
  `).run(id, kind, String(detail).slice(0, 180), delta);

function auth(req, res, next) {
  const id = String(req.header('x-demo-user') || '');
  const currentUser = getUser(id);

  if (!currentUser) {
    return res.status(401).json({
      error: 'Create a demo account first.'
    });
  }

  req.user = currentUser;
  next();
}

// Health check
app.get('/api/health', (req, res) => {
  res.json({ ok: true, mode: 'demo-only' });
});

// Community account registration
app.post('/api/register', (req, res) => {
  const username = usernameClean(req.body?.username);

  if (!/^[a-z0-9_]{3,20}$/.test(username)) {
    return res.status(400).json({
      error: 'Username must contain 3–20 letters, numbers or underscores.'
    });
  }

  if (req.body?.ageConfirmed !== true) {
    return res.status(400).json({
      error: 'Please confirm the demo rules first.'
    });
  }

  const existing = db.prepare(
    'SELECT id FROM users WHERE username = ?'
  ).get(username);

  if (existing) {
    return res.status(409).json({
      error: 'That username already has a demo account.'
    });
  }

  const id = crypto.randomUUID();
  const code = 'PV-' +
    crypto.randomBytes(3).toString('hex').toUpperCase();

  db.prepare(`
    INSERT INTO users (id, username, age_confirmed, code)
    VALUES (?, ?, 1, ?)
  `).run(id, username, code);

  logActivity(id, 'account', 'Demo account created');

  res.status(201).json({
    user: getUser(id),
    code,
    note: 'Demo account only. No Roblox profile is connected.'
  });
});

// Current account
app.get('/api/me', auth, (req, res) => {
  res.json({ user: req.user });
});

// Local demo verification only
app.post('/api/verify-demo', auth, (req, res) => {
  const saved = db.prepare(
    'SELECT code FROM users WHERE id = ?'
  ).get(req.user.id);

  if (
    String(req.body?.code || '').trim().toUpperCase()
    !== saved?.code
  ) {
    return res.status(400).json({
      error: 'Code does not match.'
    });
  }

  db.prepare(
    'UPDATE users SET verified = 1 WHERE id = ?'
  ).run(req.user.id);

  logActivity(
    req.user.id,
    'verification',
    'Local demo verification complete'
  );

  res.json({
    user: getUser(req.user.id),
    note: 'Local demo verification only. No Roblox profile was checked.'
  });
});

// Leaderboard
app.get('/api/leaderboard', (req, res) => {
  const leaderboard = db.prepare(`
    SELECT username, points, verified
    FROM users
    ORDER BY points DESC, username ASC
    LIMIT 20
  `).all();

  res.json({ leaderboard });
});

// Account activity
app.get('/api/activity', auth, (req, res) => {
  const activity = db.prepare(`
    SELECT kind, detail, delta, created_at
    FROM activity
    WHERE user_id = ?
    ORDER BY id DESC
    LIMIT 30
  `).all(req.user.id);

  res.json({ activity });
});

// Free practice game: no stakes or payouts.
app.post('/api/game/color-dice', auth, (req, res) => {
  const colors = [
    'red', 'blue', 'green',
    'yellow', 'purple', 'orange'
  ];

  const rolled = colors[crypto.randomInt(colors.length)];

  logActivity(
    req.user.id,
    'game',
    `Color Dice practice: ${rolled}`
  );

  res.json({
    rolled,
    message: 'Practice round complete. Points were not changed.',
    user: getUser(req.user.id)
  });
});

// Free practice game: no stakes or payouts.
app.post('/api/game/coinflip', auth, (req, res) => {
  const result = crypto.randomInt(2) ? 'heads' : 'tails';

  logActivity(
    req.user.id,
    'game',
    `Coinflip practice: ${result}`
  );

  res.json({
    result,
    message: 'Practice round complete. Points were not changed.',
    user: getUser(req.user.id)
  });
});

// Community chat
const chatHistory = [];
const MAX_CHAT_MESSAGES = 50;

app.post('/api/chat', auth, (req, res) => {
  const message = String(req.body?.message || '')
    .trim()
    .slice(0, 240);

  if (!message) {
    return res.status(400).json({
      error: 'Message is empty.'
    });
  }

  const entry = {
    username: req.user.username,
    message,
    at: new Date().toISOString()
  };

  chatHistory.push(entry);

  if (chatHistory.length > MAX_CHAT_MESSAGES) {
    chatHistory.shift();
  }

  io.emit('chat:message', entry);
  res.json({ ok: true });
});

io.on('connection', socket => {
  socket.emit('chat:history', chatHistory);
});

// Return a proper JSON error for unknown API endpoints.
app.use('/api', (req, res) => {
  res.status(404).json({ error: 'API endpoint not found.' });
});

// Error handler
app.use((err, req, res, next) => {
  console.error('Request error:', err.message);

  if (res.headersSent) {
    return next(err);
  }

  res.status(500).json({
    error: 'Internal server error.'
  });
});

server.listen(port, '0.0.0.0', () => {
  console.log(`PetVerse running on port ${port}`);
});

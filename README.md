# PetVerse — PS99 Community Demo

English, purple-themed PS99-inspired community starter with Node.js, Express, Socket.IO, and SQLite.

## Included
- Roblox username field and local demo verification code
- Age self-declaration UI
- Server-side demo-point Color Dice and Coinflip using Node's `crypto.randomInt`
- Leaderboard, activity log endpoint, WebSocket chat
- Crash and Mines visual previews
- Responsive purple/neon UI

## Run locally
Requires Node.js 20+.

```bash
npm install
npm start
```
Open http://localhost:3000.

## Demo flow
1. Click Create account and enter a Roblox username.
2. Confirm the age notice.
3. The demo displays a verification code; enter it to verify the local demo account.
4. Play Color Dice or Coinflip with 1,000 virtual demo points.

## Important limitations
This is a **demo starter**, not production-ready. It does not connect to Roblox, check a Roblox profile, process real pets or gems, support deposits/withdrawals, or implement real-value gambling. The age checkbox is a self-declaration, not age verification. Crash and Mines are visual previews only. Demo points have no cash or item value.

Before production, add secure server-side sessions, CSRF protection, strict CSP, moderation/reporting, monitoring, backups, tests, and a reviewed database migration. The current demo stores a user ID in sessionStorage for convenience; replace this with secure HttpOnly cookies before any public launch. Roblox verification should use supported public endpoints and must never ask for passwords, browser cookies, or session tokens. PostgreSQL is recommended for production; a starter schema is in `db/schema.postgres.sql`.

PetVerse is a fan-made demo and is not affiliated with Roblox or BIG Games.

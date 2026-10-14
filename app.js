const $ = (selector) => document.querySelector(selector);
const $all = (selector) => Array.from(document.querySelectorAll(selector));

function safeJSONParse(value) {
  try {
    return JSON.parse(value);
  } catch {
    return null;
  }
}

function safeSessionUser() {
  const raw = sessionStorage.getItem('pvUser');
  return raw ? safeJSONParse(raw) : null;
}

let user = safeSessionUser();
let socket = null;

function showToast(msg) {
  const toast = $('#toast');
  if (!toast) return;
  toast.textContent = msg;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 2400);
}

function openModal() {
  const modal = $('#backdrop');
  if (!modal) return;
  modal.classList.remove('hidden');
  modal.setAttribute('aria-hidden', 'false');
}

function closeModal() {
  const modal = $('#backdrop');
  if (!modal) return;
  modal.classList.add('hidden');
  modal.setAttribute('aria-hidden', 'true');
}

function saveUser(nextUser) {
  user = nextUser;
  try {
    sessionStorage.setItem('pvUser', JSON.stringify(user));
  } catch {
    // ignore storage problems in demo mode
  }
  updateUserUI();
}

function updateUserUI() {
  if (!user) {
    $('#heroAccount')?.setAttribute('data-label', 'Create account');
    return;
  }
  $('#heroAccount')?.setAttribute('data-label', user.username || 'Demo user');
}

function escapeHtml(input) {
  return String(input ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

async function api(url, options = {}) {
  const headers = {
    'Content-Type': 'application/json',
    ...(options.headers || {})
  };

  if (user?.id) {
    headers['x-demo-user'] = user.id;
  }

  const res = await fetch(url, {
    ...options,
    headers,
    cache: 'no-store'
  });

  const raw = await res.text().catch(() => '');
  let data = {};
  try {
    data = raw ? JSON.parse(raw) : {};
  } catch {
    data = { error: 'Invalid server response.' };
  }

  if (!res.ok) {
    throw new Error(data.error || res.statusText || 'Request failed');
  }

  return data;
}

async function refreshLeaderboard() {
  try {
    const result = await api('/api/leaderboard');
    const list = result.leaderboard || [];
    const container = $('#leaders');
    if (!container) return;

    if (!list.length) {
      container.innerHTML = '<div class="leader-row empty"><span>Awaiting first player</span></div>';
      return;
    }

    container.innerHTML = list.map((entry, index) => `
      <div class="leader-row">
        <span class="rank rank-${index + 1}">${index + 1}</span>
        <span>${escapeHtml(entry.username)}</span>
        <span>${Number(entry.points || 0).toLocaleString()}</span>
        <span>${entry.verified ? '✅' : '–'}</span>
      </div>
    `).join('');
  } catch (error) {
    console.error('Leaderboard error:', error);
    const container = $('#leaders');
    if (container) {
      container.innerHTML = '<div class="leader-row empty"><span>Leaderboard unavailable</span></div>';
    }
  }
}

async function createAccount(username, ageConfirmed) {
  try {
    const result = await api('/api/register', {
      method: 'POST',
      body: JSON.stringify({ username, ageConfirmed })
    });

    if (result?.user) {
      saveUser(result.user);
      $('#codeBox').textContent = result.code || 'PV-XXXX';
      $('#register').classList.add('hidden');
      $('#verify').classList.remove('hidden');
      $('#error').textContent = '';
      showToast('Account created. Verify to continue.');
    }
  } catch (error) {
    $('#error').textContent = error.message;
  }
}

async function verifyDemoCode(code) {
  try {
    const result = await api('/api/verify-demo', {
      method: 'POST',
      body: JSON.stringify({ code })
    });

    if (result?.user) {
      saveUser(result.user);
      $('#verifyError').textContent = '';
      $('#verify').classList.add('hidden');
      closeModal();
      connectSocket();
      showToast('Verification complete');
    }
  } catch (error) {
    $('#verifyError').textContent = error.message;
  }
}

function addMessage(entry) {
  const box = $('#messages');
  if (!box) return;

  const row = document.createElement('div');
  row.className = 'chat-msg';
  row.innerHTML = `
    <strong>${escapeHtml(entry.username || 'User')}</strong>
    <span>${escapeHtml(entry.message || '')}</span>
    <time>${new Date(entry.at || Date.now()).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</time>
  `;

  box.appendChild(row);
  box.scrollTop = box.scrollHeight;
}

function connectSocket() {
  if (!user?.verified || socket) return;
  if (typeof io !== 'function') return;

  socket = io();
  socket.on('chat:history', (history = []) => {
    const box = $('#messages');
    if (!box) return;
    box.innerHTML = '';
    history.forEach(addMessage);
  });

  socket.on('chat:message', (entry) => {
    addMessage(entry);
  });
}

async function sendChat() {
  const input = $('#chatInput');
  if (!input) return;

  const message = input.value.trim();
  if (!message) return;

  try {
    await api('/api/chat', {
      method: 'POST',
      body: JSON.stringify({ message })
    });
    input.value = '';
  } catch (error) {
    showToast(error.message || 'Chat failed');
  }
}

async function playGame(kind) {
  if (!user) {
    openModal();
    showToast('Create an account first');
    return;
  }

  try {
    const result = await api(`/api/game/${kind}`, {
      method: 'POST',
      body: JSON.stringify({})
    });

    showToast(result.message || 'Round complete');
    await refreshLeaderboard();
  } catch (error) {
    showToast(error.message || 'Game failed');
  }
}

function bindEvents() {
  $('#openRegister')?.addEventListener('click', () => {
    $('#register').classList.remove('hidden');
    $('#verify').classList.add('hidden');
    $('#error').textContent = '';
    $('#verifyError').textContent = '';
    openModal();
  });

  $('#openRegisterSecondary')?.addEventListener('click', () => {
    $('#openRegister').click();
  });

  $('#modalClose')?.addEventListener('click', closeModal);

  $('#registerBtn')?.addEventListener('click', () => {
    const username = $('#username')?.value.trim();
    const ageConfirmed = !!$('#age')?.checked;

    if (!username) {
      $('#error').textContent = 'Please enter a username.';
      return;
    }

    if (!ageConfirmed) {
      $('#error').textContent = 'Please confirm the demo rules.';
      return;
    }

    createAccount(username, ageConfirmed);
  });

  $('#verifyBtn')?.addEventListener('click', () => {
    const code = $('#codeInput')?.value.trim();
    if (!code) {
      $('#verifyError').textContent = 'Enter the verification code.';
      return;
    }
    verifyDemoCode(code);
  });

  $('#sendChat')?.addEventListener('click', sendChat);

  $('#chatInput')?.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
      sendChat();
    }
  });

  $('#refreshLeaderboard')?.addEventListener('click', refreshLeaderboard);

  $all('[data-game]').forEach((button) => {
    button.addEventListener('click', () => {
      const kind = button.dataset.game;
      if (!kind) return;
      if (kind === 'dice') playGame('color-dice');
      if (kind === 'coinflip') playGame('coinflip');
    });
  });
}

async function boot() {
  bindEvents();
  updateUserUI();
  await refreshLeaderboard();

  if (user?.verified) {
    connectSocket();
  }

  try {
    const me = await api('/api/me');
    if (me?.user) saveUser(me.user);
  } catch {
    // ignore when no session exists
  }
}

boot();

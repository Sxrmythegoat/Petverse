:root {
  --bg-top: #0c3e94;
  --bg-mid: #0a1b3b;
  --panel: rgba(6, 20, 42, 0.88);
  --drop: rgba(2, 9, 18, 0.38);
  --line: rgba(121, 211, 255, 0.42);
  --line-strong: rgba(111, 205, 255, 0.8);
  --blue: #1a84ff;
  --blue-2: #3ec8ff;
  --cyan: #7fe8ff;
  --gold: #ffe067;
  --purple: #7b5cff;
  --green: #39e9b0;
  --pink: #ff63b4;
  --text: #f0f9ff;
  --muted: #bfdcff;
  --shadow: 0 18px 36px rgba(2, 12, 26, 0.35);
  --card-shadow: 0 15px 28px rgba(0, 0, 0, 0.2);
}

* { box-sizing: border-box; }
html { scroll-behavior: smooth; }
body {
  margin: 0;
  min-height: 100vh;
  font-family: Inter, "Segoe UI", Arial, sans-serif;
  color: var(--text);
  background:
    radial-gradient(circle at 85% 24%, rgba(165, 212, 255, 0.22), transparent 18%),
    radial-gradient(circle at 12% 12%, rgba(255, 132, 214, 0.18), transparent 16%),
    linear-gradient(180deg, #0d438d 0%, #0b2244 18%, #07192f 100%);
}

button, input { font: inherit; }

.page-shell {
  width: min(1240px, calc(100% - 28px));
  margin: 18px auto 28px;
  position: relative;
  z-index: 1;
}

.topbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 18px;
  min-height: 84px;
  padding: 8px 18px 8px 14px;
  background: rgba(4, 21, 44, 0.9);
  border-radius: 18px 18px 15px 15px;
  border: 1px solid rgba(121, 199, 255, 0.38);
  box-shadow: var(--shadow);
}

.brand-wrap {
  display: flex;
  align-items: center;
  gap: 10px;
  min-width: 210px;
}

.brand-mark {
  width: 42px;
  height: 42px;
  display: grid;
  place-items: center;
  border-radius: 12px;
  font-size: 26px;
  background: linear-gradient(180deg, rgba(125, 210, 255, 0.16), rgba(18, 92, 180, 0.18));
  box-shadow: inset 0 0 0 1px rgba(171, 223, 255, 0.45);
}

.brand-text {
  display: flex;
  flex-direction: column;
  line-height: 0.98;
}

.brand-title {
  font-size: clamp(1.8rem, 2.5vw, 2.2rem);
  letter-spacing: -0.08em;
  font-weight: 950;
}
.brand-title span { color: var(--gold); }
.brand-text small {
  margin-top: 6px;
  font-size: 9px;
  letter-spacing: 0.2em;
  color: #a2dcff;
}

.main-nav {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;
}
.main-nav a {
  text-decoration: none;
  color: #edf8ff;
  font-weight: 800;
  font-size: 0.97rem;
  opacity: 0.96;
}
.main-nav a:hover { color: var(--cyan); }

.primary-btn {
  border: 1px solid rgba(118, 214, 255, 0.85);
  background: linear-gradient(180deg, #49d0ff 0%, #1685ff 78%);
  color: white;
  border-radius: 12px;
  padding: 12px 18px;
  font-weight: 800;
  letter-spacing: -0.02em;
  cursor: pointer;
  box-shadow: 0 6px 0 rgba(16, 70, 149, 0.85), 0 12px 18px rgba(18, 90, 200, 0.22);
  transition: transform 0.15s ease, filter 0.15s ease;
}
.primary-btn:hover { transform: translateY(-1px); filter: brightness(1.08); }
.primary-btn.alt {
  background: rgba(20, 44, 74, 0.2);
  box-shadow: inset 0 0 0 1px rgba(137, 219, 255, 0.7);
}
.primary-btn.accent { padding-inline: 22px; }

.page-main {
  margin-top: 18px;
  border-radius: 22px;
  overflow: hidden;
  border: 1px solid rgba(111, 193, 255, 0.34);
  box-shadow: var(--shadow);
}

.hero-shell {
  position: relative;
  display: grid;
  grid-template-columns: 1.08fr 0.92fr;
  gap: 26px;
  min-height: 430px;
  padding: 28px 22px 18px;
  background:
    radial-gradient(circle at 80% 35%, rgba(138, 228, 255, 0.2), transparent 24%),
    linear-gradient(145deg, rgba(7, 51, 104, 0.98), rgba(7, 22, 46, 0.98));
}
.hero-shell::before {
  content: "";
  position: absolute;
  inset: 0;
  background:
    radial-gradient(circle at 30% 100%, rgba(133, 255, 206, 0.18), transparent 18%),
    linear-gradient(180deg, transparent 52%, rgba(4, 16, 34, 0.1));
  pointer-events: none;
}

.hero-copy, .hero-art { position: relative; z-index: 1; }
.hero-copy { padding: 12px 8px 0 8px; }
.eyebrow {
  color: var(--cyan);
  font-size: 0.7rem;
  font-weight: 900;
  letter-spacing: 0.18em;
  text-transform: uppercase;
}
.hero-copy h1 {
  margin: 18px 0 12px;
  font-size: clamp(3.2rem, 4.9vw, 5.3rem);
  line-height: 0.97;
  letter-spacing: -0.09em;
  font-weight: 1000;
}
.hero-copy p {
  margin: 0;
  font-size: 1.06rem;
  line-height: 1.7;
  color: rgba(221, 237, 255, 0.9);
}
.hero-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 24px;
}
.hero-meta {
  display: flex;
  flex-wrap: wrap;
  gap: 18px;
  margin-top: 20px;
  color: rgba(219, 235, 255, 0.84);
  font-size: 0.8rem;
  font-weight: 700;
}

.hero-art {
  position: relative;
  min-height: 340px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.pet-scene {
  position: relative;
  width: min(89%, 440px);
  height: 260px;
}
.mini-pet {
  position: absolute;
  bottom: 18px;
  width: 120px;
  height: 120px;
  display: grid;
  place-items: center;
  border-radius: 18px;
  font-size: 4.2rem;
  background: linear-gradient(145deg, #a5b0c1, #6a7f98 72%);
  border: 3px solid rgba(198, 230, 255, 0.9);
  box-shadow: inset 0 0 0 2px rgba(255,255,255,0.14), 0 18px 28px rgba(3, 12, 34, 0.25);
}
.pet-left { left: 6%; transform: rotate(-10deg) scale(.84); }
.pet-mid {
  left: 50%;
  transform: translateX(-50%);
  width: 160px;
  height: 160px;
  z-index: 2;
  background: linear-gradient(145deg, #b2bfd0, #7187a6 76%);
}
.pet-right { right: 8%; transform: rotate(10deg) scale(.84); }

.big-cat-box {
  position: absolute;
  right: 15%;
  top: 50%;
  transform: translateY(-50%);
  width: 210px;
  height: 180px;
  display: grid;
  place-items: center;
  border-radius: 26px;
  background: linear-gradient(145deg, #99a6ba, #667d94 80%);
  border: 3px solid rgba(210, 235, 255, 0.9);
  box-shadow: inset 0 0 0 2px rgba(255,255,255,0.14), 0 18px 32px rgba(4, 10, 28, 0.3);
  font-size: 8rem;
  z-index: 3;
}
.ps99-badge {
  position: absolute;
  right: 3%;
  top: 51%;
  width: 116px;
  height: 116px;
  display: grid;
  place-items: center;
  background: linear-gradient(180deg, rgba(128, 211, 255, 0.18), rgba(53, 110, 190, 0.28));
  border-radius: 18px;
  border: 2px solid rgba(128, 223, 255, 0.72);
  color: #bfeeff;
  font-weight: 900;
  font-size: 2.1rem;
  box-shadow: inset 0 0 0 1px rgba(255,255,255,0.1), 0 16px 26px rgba(0,0,0,0.18);
}

.floating-crystal {
  position: absolute;
  width: 28px;
  height: 28px;
  border-radius: 9px;
  background: linear-gradient(180deg, rgba(155, 235, 255, 0.9), rgba(72, 163, 233, 0.4));
  box-shadow: inset 0 0 0 1px rgba(255,255,255,0.2), 0 10px 16px rgba(81, 179, 255, 0.18);
  transform: rotate(12deg);
  animation: float 5s ease-in-out infinite;
}
.crystal-a { left: 6%; top: 18%; }
.crystal-b { right: 10%; top: 16%; animation-delay: .4s; }
.crystal-c { right: 21%; bottom: 12%; animation-delay: .8s; }
.crystal-d { left: 18%; bottom: 14%; animation-delay: 1.2s; }
@keyframes float {
  0%,100% { transform: translateY(0) rotate(12deg); }
  50% { transform: translateY(-8px) rotate(12deg); }
}

.stats-bar {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  background: rgba(8, 29, 61, 0.95);
  border: 1px solid rgba(101, 178, 255, 0.42);
  border-top: none;
  overflow: hidden;
  box-shadow: var(--shadow);
}
.stat-box {
  display: grid;
  grid-template-columns: auto 1fr;
  align-items: center;
  gap: 8px 12px;
  min-height: 96px;
  padding: 18px 18px 16px;
  border-right: 1px solid rgba(255,255,255,0.08);
}
.stat-box:last-child { border-right: none; }
.stat-icon {
  width: 38px;
  height: 38px;
  display: grid;
  place-items: center;
  border-radius: 12px;
  background: rgba(17, 58, 95, 0.72);
  border: 1px solid rgba(156, 214, 255, 0.7);
  grid-row: 1 / span 2;
  font-size: 1.4rem;
}
.stat-number {
  font-size: clamp(1.6rem, 2vw, 2.4rem);
  font-weight: 950;
  letter-spacing: -0.08em;
  line-height: 1;
}
.stat-label {
  grid-column: 2;
  color: rgba(202, 224, 245, 0.8);
  font-size: 0.68rem;
  font-weight: 800;
  letter-spacing: 0.14em;
}

.games-panel {
  margin-top: 28px;
  padding: 18px 18px 22px;
  border-radius: 24px;
  background: rgba(8, 25, 54, 0.9);
  border: 1px solid rgba(101, 181, 255, 0.42);
  box-shadow: var(--shadow);
}
.section-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  margin-bottom: 18px;
}
.section-title {
  display: flex;
  align-items: center;
  gap: 10px;
}
.spark { font-size: 1.35rem; }
.section-header h2 {
  margin: 0;
  font-size: clamp(2rem, 2.6vw, 3rem);
  font-weight: 950;
  letter-spacing: -0.07em;
}
.demo-pill {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 8px 12px;
  border-radius: 999px;
  border: 1px solid rgba(111, 209, 255, 0.72);
  background: rgba(14, 52, 91, 0.8);
  color: var(--cyan);
  font-size: 0.68rem;
  font-weight: 800;
  letter-spacing: 0.14em;
}

.games-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 18px;
}
.game-card {
  min-height: 268px;
  padding: 16px 16px 14px;
  background: linear-gradient(160deg, rgba(18, 49, 97, 0.9), rgba(8, 20, 40, 0.96));
  border: 1px solid rgba(99, 181, 255, 0.55);
  border-radius: 18px;
  box-shadow: var(--card-shadow);
}
.card-blue { background: linear-gradient(160deg, rgba(34, 86, 204, 0.92), rgba(12, 28, 55, 0.96)); }
.card-purple { background: linear-gradient(160deg, rgba(59, 57, 180, 0.92), rgba(13, 19, 52, 0.96)); }
.card-gold { background: linear-gradient(160deg, rgba(57, 120, 194, 0.9), rgba(10, 31, 58, 0.96)); }
.card-emerald { background: linear-gradient(160deg, rgba(35, 103, 165, 0.85), rgba(9, 31, 60, 0.96)); }

.game-emoji {
  width: 100%;
  height: 86px;
  display: grid;
  place-items: center;
  background: rgba(12, 43, 78, 0.56);
  border: 1px solid rgba(138, 208, 255, 0.34);
  border-radius: 12px;
  font-size: 3rem;
  margin-bottom: 14px;
}
.coin-emoji { font-size: 2.7rem; }
.rocket-emoji { font-size: 2.8rem; }
.grid-emoji { font-size: 3rem; }

.game-card h3 {
  margin: 0 0 8px;
  font-size: 1.08rem;
  letter-spacing: -0.05em;
  font-weight: 900;
}
.game-card h3 small {
  padding: 2px 6px;
  border-radius: 999px;
  background: rgba(144, 219, 255, 0.12);
  color: #d4f7ff;
  font-size: 0.58rem;
  margin-left: 6px;
}
.game-card p {
  margin: 0 0 14px;
  min-height: 54px;
  color: var(--muted);
  font-size: 0.88rem;
  line-height: 1.6;
}

.color-row {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin: 0 0 14px;
}
.dot {
  width: 22px;
  height: 22px;
  border-radius: 50%;
  border: 2px solid rgba(255,255,255,0.7);
  box-shadow: inset 0 0 0 1px rgba(0,0,0,0.08), 0 2px 8px rgba(0,0,0,0.18);
}
.red { background: #ff4a68; }
.blue { background: #1899ff; }
.green { background: #1ae6ba; }
.yellow { background: #f5d84c; }
.purple { background: #a15cff; }
.orange { background: #ff9a3c; }

.coin-wrap {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
  margin: 0 0 14px;
  font-size: 1.4rem;
}
.coin {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 34px;
  height: 34px;
  border-radius: 50%;
  background: rgba(255, 214, 92, 0.18);
  border: 1px solid rgba(255,214,92,0.5);
}
.vs {
  font-size: 0.9rem;
  font-weight: 900;
  color: #fff;
}

.multiplier {
  margin: 4px 0 16px;
  text-align: center;
  font-size: 3.2rem;
  line-height: 1;
  letter-spacing: -0.08em;
  font-weight: 900;
}

.mine-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 8px;
  margin: 0 0 14px;
}
.mine-grid span {
  display: grid;
  place-items: center;
  width: 100%;
  height: 28px;
  border-radius: 8px;
  border: 1px solid rgba(129, 203, 255, 0.75);
  background: rgba(18, 56, 94, 0.32);
  color: #d9f5ff;
  font-weight: 900;
}

.card-btn {
  width: 100%;
  border: 1px solid rgba(129, 204, 255, 0.82);
  border-radius: 12px;
  background: linear-gradient(180deg, #2fc2ff 0%, #1786ff 78%);
  box-shadow: 0 4px 0 rgba(12, 81, 159, 0.8);
  color: white;
  font-weight: 800;
  padding: 11px 14px;
  cursor: pointer;
}

.bottom-panel {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 18px;
  margin-top: 22px;
  padding: 0 0 14px;
}
.leaderboard-panel, .chat-panel {
  background: linear-gradient(160deg, rgba(11, 34, 67, 0.96), rgba(8, 19, 39, 0.98));
  border: 1px solid rgba(98, 183, 255, 0.42);
  border-radius: 18px;
  padding: 14px 18px 16px;
  box-shadow: var(--shadow);
}
.subhead-row {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 12px;
}
.subhead-row h3 {
  margin: 0;
  font-size: 1.14rem;
  letter-spacing: -0.04em;
}
.head-icon { font-size: 1.3rem; }
.demo-badge {
  margin-left: auto;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 5px 8px;
  border-radius: 8px;
  background: rgba(29, 95, 176, 0.62);
  color: #aeeeff;
  font-size: 0.58rem;
  font-weight: 800;
  letter-spacing: 0.08em;
}
.leaderboard-head {
  display: grid;
  grid-template-columns: 1.4fr 0.9fr 0.65fr;
  gap: 8px;
  padding: 8px 4px 10px;
  border-bottom: 1px solid rgba(255,255,255,0.08);
  color: #8ec8ff;
  font-size: 0.58rem;
  letter-spacing: 0.13em;
  font-weight: 800;
}
.leaderboard-list { margin-top: 6px; }
.leader-row {
  display: grid;
  grid-template-columns: 28px 1.3fr 0.8fr 0.5fr;
  align-items: center;
  gap: 10px;
  padding: 11px 2px;
  border-bottom: 1px solid rgba(255,255,255,0.04);
  font-size: 0.92rem;
}
.rank {
  width: 24px;
  height: 24px;
  display: grid;
  place-items: center;
  border-radius: 7px;
  font-weight: 900;
  color: #dff7ff;
  background: rgba(21, 69, 126, 0.92);
  font-size: 0.7rem;
}
.rank-1 { background: rgba(255, 214, 92, 0.18); }
.rank-2 { background: rgba(176, 186, 255, 0.18); }
.rank-3 { background: rgba(194, 228, 255, 0.18); }
.rank-4, .rank-5 { background: rgba(21, 69, 126, 0.9); }
.ghost-btn {
  width: 100%;
  margin-top: 12px;
  border: 1px solid rgba(118, 203, 255, 0.72);
  border-radius: 12px;
  background: rgba(13, 34, 62, 0.8);
  color: var(--cyan);
  font-weight: 800;
  padding: 10px 12px;
  cursor: pointer;
}

.chat-head { margin-bottom: 14px; }
.online-dot {
  margin-left: auto;
  color: #4fe79d;
  font-size: 1.3rem;
}
.chat-box {
  height: 236px;
  overflow: auto;
  border-radius: 12px;
  border: 1px solid rgba(103, 189, 255, 0.38);
  background: rgba(4, 16, 32, 0.78);
  padding: 10px 8px 4px;
}
.chat-msg {
  display: flex;
  align-items: baseline;
  flex-wrap: wrap;
  gap: 6px;
  padding: 8px 4px;
  border-bottom: 1px solid rgba(255,255,255,0.04);
  color: #e2f0ff;
  font-size: 0.84rem;
}
.chat-msg strong { color: #88d9ff; }
.chat-msg time {
  margin-left: auto;
  color: #a5c9f5;
  font-size: 0.68rem;
}
.chat-input-row {
  display: flex;
  gap: 10px;
  margin-top: 12px;
}
.chat-input-row input {
  flex: 1;
  min-width: 0;
  border: 1px solid rgba(100, 178, 255, 0.62);
  background: rgba(4, 15, 29, 0.82);
  color: white;
  border-radius: 12px;
  padding: 12px 14px;
  outline: none;
}
.chat-input-row input:focus {
  box-shadow: 0 0 0 3px rgba(90, 214, 255, 0.14);
}
.send-btn {
  width: 52px;
  height: 48px;
  border: 1px solid rgba(120, 204, 255, 0.8);
  border-radius: 12px;
  background: linear-gradient(180deg, #2ec2ff, #1786ff 76%);
  color: white;
  cursor: pointer;
  font-size: 1.3rem;
}

.backdrop {
  position: fixed;
  inset: 0;
  z-index: 50;
  display: grid;
  place-items: center;
  background: rgba(3, 10, 20, 0.72);
  padding: 20px;
}
.hidden { display: none !important; }

.modal {
  position: relative;
  width: min(440px, calc(100vw - 26px));
  padding: 26px 22px 20px;
  background: linear-gradient(180deg, rgba(15, 47, 82, 0.98), rgba(7, 20, 41, 0.98));
  border: 1px solid rgba(97, 194, 255, 0.8);
  border-radius: 20px;
  box-shadow: 0 26px 62px rgba(0,0,0,0.42);
}
.modal-header h3 {
  margin: 8px 0 6px;
  font-size: 2rem;
  letter-spacing: -0.06em;
}
.modal p { margin: 0 0 16px; color: var(--muted); }
.modal-eyebrow {
  font-size: 0.62rem;
  letter-spacing: 0.2em;
}
.form-block {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.form-block label {
  color: #d7efff;
  font-size: 0.8rem;
  font-weight: 700;
}
.form-block input {
  width: 100%;
  border: 1px solid rgba(101, 177, 255, 0.68);
  background: rgba(4, 14, 29, 0.78);
  color: white;
  border-radius: 12px;
  padding: 12px 14px;
  outline: none;
}
.checkbox-row {
  display: flex;
  align-items: flex-start;
  gap: 8px;
  font-size: 0.82rem;
  line-height: 1.5;
  color: #d9efff;
}
.checkbox-row input {
  width: auto;
  margin-top: 4px;
}
.error-text {
  min-height: 20px;
  font-size: 0.8rem;
  color: #ff9aab;
}
.wide-btn { width: 100%; }
.close-btn {
  position: absolute;
  top: 10px;
  right: 12px;
  border: 0;
  background: transparent;
  color: rgba(255,255,255,0.85);
  font-size: 2rem;
  line-height: 1;
  cursor: pointer;
}
.code-box {
  min-height: 54px;
  display: grid;
  place-items: center;
  border-radius: 12px;
  background: rgba(19, 84, 155, 0.24);
  border: 1px dashed rgba(118, 223, 255, 0.8);
  color: #d4f4ff;
  font-weight: 900;
  letter-spacing: 0.14em;
}

.toast {
  position: fixed;
  left: 50%;
  bottom: 24px;
  transform: translateX(-50%) translateY(18px);
  opacity: 0;
  pointer-events: none;
  max-width: min(420px, calc(100vw - 28px));
  background: rgba(10, 32, 59, 0.96);
  border: 1px solid rgba(118, 206, 255, 0.75);
  border-radius: 12px;
  color: white;
  padding: 12px 18px;
  font-weight: 700;
  box-shadow: 0 18px 34px rgba(0,0,0,0.22);
  transition: opacity 0.2s ease, transform 0.2s ease;
  z-index: 60;
}
.toast.show {
  opacity: 1;
  transform: translateX(-50%) translateY(0);
}

@media (max-width: 980px) {
  .hero-shell { grid-template-columns: 1fr; }
  .games-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
  .bottom-panel { grid-template-columns: 1fr; }
}
@media (max-width: 720px) {
  .topbar {
    flex-wrap: wrap;
    justify-content: center;
    padding: 16px 12px;
  }
  .main-nav {
    width: 100%;
    justify-content: space-between;
    order: 3;
  }
  .hero-shell { padding: 20px 14px 18px; }
  .hero-actions { flex-direction: column; align-items: stretch; }
  .hero-actions .primary-btn { width: 100%; }
  .stats-bar { grid-template-columns: repeat(2, minmax(0, 1fr)); }
  .games-grid { grid-template-columns: 1fr; }
}
@media (max-width: 420px) {
  .page-shell { width: min(100% - 12px, 1200px); }
  .brand-title { font-size: 1.5rem; }
  .stats-bar { grid-template-columns: 1fr; }
  .hero-copy h1 { font-size: 2.6rem; }
  .leaderboard-head { grid-template-columns: 1.2fr 0.7fr 0.5fr; }
  .leader-row { grid-template-columns: 26px 1fr 0.8fr 0.5fr; }
}




















































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































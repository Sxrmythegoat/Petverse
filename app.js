/* PetVerse — neon community landing page */
:root {
  --bg-deep: #061b3d;
  --bg-dark: #071c3d;
  --panel: #0a234c;
  --panel-strong: #0d2d5d;
  --panel-soft: rgba(32, 88, 157, 0.7);
  --line: rgba(96, 196, 255, 0.4);
  --line-strong: rgba(86, 163, 255, 0.8);
  --blue: #177eff;
  --blue-2: #38b7ff;
  --cyan: #75e4ff;
  --purple: #7a53ff;
  --gold: #ffd869;
  --gold-soft: #ffcb50;
  --green: #1ae6ba;
  --text: #f0f8ff;
  --muted: #b7d2f2;
  --shadow: 0 18px 40px rgba(3, 12, 27, 0.45);
}

* {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  min-height: 100vh;
  font-family: Inter, "Segoe UI", system-ui, -apple-system, sans-serif;
  background:
    radial-gradient(circle at 50% 0%, rgba(71, 165, 255, 0.28), transparent 22%),
    radial-gradient(circle at 12% 10%, rgba(144, 127, 255, 0.22), transparent 20%),
    linear-gradient(180deg, #0c3b8e 0%, #0a1f45 18%, #07182f 100%);
  color: var(--text);
}

body::before {
  content: "";
  position: fixed;
  inset: 0;
  background:
    linear-gradient(180deg, transparent 0%, rgba(9, 30, 63, 0.15) 100%),
    radial-gradient(circle at 50% 100%, rgba(74, 200, 255, 0.12), transparent 30%);
  pointer-events: none;
}

button,
input {
  font: inherit;
}

img {
  max-width: 100%;
  display: block;
}

.page-shell {
  width: min(1240px, calc(100% - 28px));
  margin: 20px auto 32px;
  padding: 0 0 10px;
  position: relative;
}

.topbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  min-height: 82px;
  padding: 0 18px 0 14px;
  background: rgba(5, 25, 54, 0.88);
  border: 1px solid rgba(108, 180, 255, 0.4);
  border-radius: 22px 22px 18px 18px;
  box-shadow: var(--shadow);
  backdrop-filter: blur(8px);
}

.brand-wrap {
  display: flex;
  align-items: center;
  gap: 12px;
  min-width: 210px;
}

.brand-mark {
  width: 42px;
  height: 42px;
  display: grid;
  place-items: center;
  border-radius: 12px;
  background: linear-gradient(180deg, rgba(93, 203, 255, 0.25), rgba(15, 75, 154, 0.18));
  box-shadow: inset 0 0 0 1px rgba(160, 224, 255, 0.45);
  font-size: 26px;
}

.brand-text {
  display: flex;
  flex-direction: column;
  line-height: 1;
}

.brand-title {
  font-weight: 900;
  font-size: clamp(1.4rem, 2vw, 2rem);
  letter-spacing: -0.08em;
}

.brand-title span {
  color: var(--gold);
}

.brand-text small {
  color: #a5d9ff;
  font-size: 9px;
  letter-spacing: 0.2em;
  margin-top: 6px;
}

.main-nav {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 30px;
  flex: 1;
}

.main-nav a {
  color: #dbeeff;
  text-decoration: none;
  font-weight: 700;
  font-size: 0.95rem;
  opacity: 0.92;
}

.main-nav a:hover {
  color: var(--cyan);
}

.primary-btn {
  border: 1px solid rgba(117, 203, 255, 0.9);
  background: linear-gradient(180deg, #2cc2ff 0%, #1786ff 76%);
  color: white;
  padding: 12px 18px;
  border-radius: 14px;
  font-weight: 800;
  letter-spacing: -0.02em;
  box-shadow: 0 6px 0 rgba(19, 72, 160, 0.9), 0 10px 24px rgba(20, 110, 214, 0.34);
  cursor: pointer;
  transition: transform 0.15s ease, filter 0.15s ease;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
}

.primary-btn:hover {
  transform: translateY(-1px);
  filter: brightness(1.06);
}

.primary-btn.alt {
  background: rgba(13, 28, 50, 0.3);
  box-shadow: inset 0 0 0 1px rgba(137, 199, 255, 0.7);
}

.page-main {
  margin-top: 18px;
  border-radius: 30px;
  padding: 0 0 20px;
  box-shadow: var(--shadow);
}

.hero-panel {
  position: relative;
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  gap: 28px;
  padding: 30px 26px 18px;
  border-radius: 28px 28px 0 0;
  overflow: hidden;
  background:
    radial-gradient(circle at 80% 28%, rgba(121, 223, 255, 0.18), transparent 28%),
    linear-gradient(145deg, rgba(12, 65, 122, 0.95) 0%, rgba(9, 23, 43, 0.95) 100%);
  border: 1px solid rgba(88, 178, 255, 0.38);
  background-blend-mode: screen;
}

.hero-panel::before {
  content: "";
  position: absolute;
  inset: 0;
  background:
    radial-gradient(circle at 30% 90%, rgba(74, 243, 198, 0.2), transparent 18%),
    linear-gradient(180deg, rgba(92, 188, 255, 0.08), transparent 40%);
  pointer-events: none;
}

.hero-copy,
.hero-art {
  position: relative;
  z-index: 1;
}

.hero-copy {
  padding: 8px 12px 0 8px;
}

.tiny-tag {
  display: inline-block;
  color: var(--cyan);
  font-size: 0.7rem;
  font-weight: 900;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  opacity: 0.95;
}

.hero-copy h1 {
  margin: 16px 0 12px;
  font-size: clamp(3rem, 5vw, 5rem);
  line-height: 0.98;
  letter-spacing: -0.08em;
  font-weight: 980;
}

.hero-copy p {
  max-width: 570px;
  margin: 0;
  color: rgba(223, 239, 255, 0.94);
  font-size: 1.08rem;
  line-height: 1.7;
}

.hero-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 26px;
}

.hero-notes {
  display: flex;
  flex-wrap: wrap;
  gap: 18px;
  margin-top: 18px;
  color: #c6ebff;
  font-size: 0.82rem;
  font-weight: 700;
}

.hero-art {
  min-height: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}

.cat-stack {
  position: relative;
  width: min(90%, 430px);
  height: 260px;
  display: flex;
  align-items: end;
  justify-content: center;
}

.mini-pet {
  position: absolute;
  bottom: 20px;
  width: 120px;
  height: 120px;
  display: grid;
  place-items: center;
  font-size: 4.3rem;
  border-radius: 18px;
  background: linear-gradient(150deg, #9ab0c2, #5f7d9c 72%);
  border: 3px solid rgba(194, 231, 255, 0.9);
  box-shadow: 0 18px 35px rgba(8, 18, 38, 0.38), inset 0 0 0 2px rgba(255,255,255,0.18);
  transform-origin: center bottom;
}

.pet-left {
  left: 16%;
  transform: rotate(-10deg) scale(0.85);
}

.pet-mid {
  left: 50%;
  transform: translateX(-50%);
  width: 150px;
  height: 150px;
  background: linear-gradient(150deg, #b2bfcc, #6f8ca8 72%);
  z-index: 2;
}

.pet-right {
  right: 12%;
  transform: rotate(10deg) scale(0.84);
}

.floating {
  position: absolute;
  font-size: 2.2rem;
  filter: drop-shadow(0 10px 20px rgba(112, 233, 255, 0.42));
  animation: float 4s ease-in-out infinite;
}

.crystal {
  width: 28px;
  height: 28px;
  display: grid;
  place-items: center;
  border-radius: 10px;
  background: rgba(152, 234, 255, 0.18);
  box-shadow: inset 0 0 0 1px rgba(145, 216, 255, 0.7);
}

.crystal-a { left: 8%; top: 22%; }
.crystal-b { right: 12%; top: 18%; animation-delay: 0.5s; }
.crystal-c { right: 22%; bottom: 10%; animation-delay: 1.1s; }

@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
}

.pet-badge {
  position: absolute;
  right: 10%;
  top: 52%;
  width: 110px;
  height: 110px;
  display: grid;
  place-items: center;
  border-radius: 18px;
  background: linear-gradient(180deg, rgba(80, 199, 255, 0.24), rgba(39, 94, 179, 0.3));
  border: 2px solid rgba(122, 220, 255, 0.7);
  font-weight: 900;
  font-size: 2.1rem;
  color: #9feaff;
  box-shadow: inset 0 0 0 1px rgba(255,255,255,0.15), 0 18px 30px rgba(0,0,0,0.15);
}

.stats-bar {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  align-items: center;
  gap: 0;
  margin-top: 0;
  border: 1px solid rgba(92, 167, 255, 0.42);
  border-top: 0;
  background: rgba(10, 32, 62, 0.88);
  border-radius: 0 0 24px 24px;
  box-shadow: var(--shadow);
  overflow: hidden;
}

.stat-box {
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 10px 12px;
  align-items: center;
  padding: 22px 18px;
  min-height: 90px;
  border-right: 1px solid rgba(255, 255, 255, 0.08);
}

.stat-box:last-child {
  border-right: none;
}

.stat-icon {
  width: 38px;
  height: 38px;
  display: grid;
  place-items: center;
  border: 1px solid rgba(157, 203, 255, 0.6);
  border-radius: 12px;
  background: rgba(14, 58, 102, 0.7);
  font-size: 1.5rem;
  grid-row: 1 / span 2;
}

.stat-number {
  font-size: clamp(1.6rem, 2vw, 2.4rem);
  font-weight: 900;
  line-height: 1;
  letter-spacing: -0.06em;
}

.stat-label {
  grid-column: 2;
  color: var(--muted);
  font-size: 0.72rem;
  letter-spacing: 0.16em;
}

.games-panel,
.community-panel {
  margin-top: 26px;
  border-radius: 24px;
  background: rgba(8, 27, 58, 0.88);
  border: 1px solid rgba(96, 180, 255, 0.42);
  box-shadow: var(--shadow);
}

.games-panel {
  padding: 24px 18px 28px;
}

.section-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 18px;
  gap: 16px;
}

.section-header h2 {
  margin: 0;
  font-size: clamp(2rem, 2.8vw, 3rem);
  letter-spacing: -0.07em;
}

.badge {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 8px 12px;
  border-radius: 999px;
  border: 1px solid rgba(102, 212, 255, 0.65);
  background: rgba(18, 62, 110, 0.7);
  color: var(--cyan);
  font-size: 0.68rem;
  font-weight: 800;
  letter-spacing: 0.16em;
}

.games-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 18px;
}

.game-card {
  position: relative;
  min-height: 260px;
  padding: 18px 18px 16px;
  border: 1px solid rgba(104, 182, 250, 0.7);
  border-radius: 20px;
  background: linear-gradient(160deg, rgba(16, 45, 85, 0.96), rgba(8, 24, 43, 0.95));
  box-shadow: inset 0 1px 0 rgba(255,255,255,0.08);
}

.card-blue { background: linear-gradient(160deg, rgba(31, 88, 197, 0.85), rgba(13, 31, 62, 0.95)); }
.card-purple { background: linear-gradient(160deg, rgba(60, 62, 182, 0.8), rgba(14, 18, 56, 0.95)); }
.card-gold { background: linear-gradient(160deg, rgba(62, 120, 193, 0.9), rgba(10, 29, 58, 0.96)); }
.card-emerald { background: linear-gradient(160deg, rgba(35, 103, 165, 0.8), rgba(10, 31, 60, 0.94)); }

.game-emoji {
  width: 100%;
  height: 86px;
  display: grid;
  place-items: center;
  font-size: 3rem;
  border-radius: 14px;
  background: rgba(12, 46, 84, 0.5);
  border: 1px solid rgba(140, 205, 255, 0.35);
  margin-bottom: 16px;
}

.game-card h3 {
  margin: 0 0 10px;
  font-size: 1.08rem;
  letter-spacing: -0.04em;
}

.game-card h3 small {
  padding: 3px 6px;
  border-radius: 999px;
  background: rgba(155, 218, 255, 0.12);
  color: #b9f6ff;
  font-size: 0.58rem;
  margin-left: 6px;
  vertical-align: middle;
}

.game-card p {
  margin: 0 0 16px;
  color: var(--muted);
  line-height: 1.6;
  font-size: 0.87rem;
  min-height: 54px;
}

.card-btn {
  width: 100%;
  border: 1px solid rgba(129, 197, 255, 0.8);
  background: linear-gradient(180deg, #2ec2ff, #1779ff 78%);
  color: white;
  font-weight: 800;
  padding: 11px 14px;
  border-radius: 12px;
  cursor: pointer;
  box-shadow: 0 4px 0 rgba(12, 79, 157, 0.82);
}

.multiplier {
  font-size: 3.2rem;
  font-weight: 900;
  line-height: 1;
  text-align: center;
  margin: 6px 0 14px;
  color: #f7f3ff;
  letter-spacing: -0.08em;
}

.community-panel {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 18px;
  padding: 18px;
}

.leaderboard-panel,
.chat-panel {
  background: linear-gradient(160deg, rgba(12, 36, 68, 0.95), rgba(8, 20, 40, 0.98));
  border: 1px solid rgba(105, 177, 255, 0.42);
  border-radius: 18px;
  padding: 16px 18px 14px;
}

.mini-heading {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 12px;
}

.mini-heading h3 {
  margin: 0;
  font-size: 1.1rem;
  letter-spacing: -0.04em;
}

.demo-badge {
  margin-left: auto;
  padding: 5px 7px;
  border-radius: 8px;
  background: rgba(32, 95, 176, 0.6);
  color: var(--cyan);
  font-size: 0.58rem;
  font-weight: 800;
  letter-spacing: 0.08em;
}

.leaderboard-head {
  display: grid;
  grid-template-columns: 1.4fr 0.9fr 0.6fr;
  gap: 8px;
  color: #8dcafc;
  font-size: 0.58rem;
  font-weight: 800;
  letter-spacing: 0.14em;
  padding: 8px 4px 12px;
  border-bottom: 1px solid rgba(255,255,255,0.08);
}

.leaderboard-list {
  margin-top: 6px;
}

.leader-row {
  display: grid;
  grid-template-columns: 28px 1.3fr 0.8fr 0.5fr;
  align-items: center;
  gap: 12px;
  padding: 10px 2px;
  border-bottom: 1px solid rgba(255,255,255,0.04);
  color: #eaf5ff;
  font-size: 0.92rem;
}

.rank {
  width: 24px;
  height: 24px;
  display: grid;
  place-items: center;
  border-radius: 7px;
  background: rgba(23, 82, 170, 0.82);
  color: #d3ebff;
  font-weight: 900;
  font-size: 0.72rem;
}

.rank-1 { background: rgba(255, 206, 89, 0.18); }
.rank-2 { background: rgba(173, 181, 255, 0.18); }
.rank-3 { background: rgba(198, 233, 255, 0.18); }

.ghost-btn {
  margin-top: 12px;
  width: 100%;
  border: 1px solid rgba(117, 203, 255, 0.62);
  background: rgba(13, 39, 70, 0.8);
  color: var(--cyan);
  border-radius: 12px;
  padding: 10px 12px;
  font-weight: 800;
  cursor: pointer;
}

.chat-heading {
  margin-bottom: 14px;
}

.online-dot {
  margin-left: auto;
  color: #46ef9c;
  font-size: 1.4rem;
}

.chat-box {
  height: 230px;
  padding: 10px 8px 4px;
  overflow: auto;
  border: 1px solid rgba(103, 190, 255, 0.38);
  border-radius: 12px;
  background: rgba(3, 17, 33, 0.75);
}

.chat-msg {
  display: flex;
  align-items: baseline;
  gap: 6px;
  flex-wrap: wrap;
  margin-bottom: 10px;
  padding: 6px 4px;
  border-bottom: 1px solid rgba(255,255,255,0.04);
  color: #dfeeff;
  font-size: 0.85rem;
}

.chat-msg strong {
  color: #82d7ff;
  font-weight: 800;
}

.chat-msg time {
  margin-left: auto;
  color: #9bbceb;
  font-size: 0.7rem;
}

.chat-input-row {
  display: flex;
  gap: 10px;
  margin-top: 12px;
}

.chat-input-row input {
  flex: 1;
  min-width: 0;
  border: 1px solid rgba(80, 160, 255, 0.6);
  background: rgba(5, 14, 31, 0.9);
  color: white;
  border-radius: 12px;
  padding: 12px 16px;
  outline: none;
}

.chat-input-row input:focus {
  box-shadow: 0 0 0 3px rgba(84, 216, 255, 0.2);
}

.send-btn {
  width: 52px;
  height: 48px;
  border: 1px solid rgba(120, 202, 255, 0.8);
  border-radius: 12px;
  background: linear-gradient(180deg, #2cc2ff, #1786ff 76%);
  color: white;
  cursor: pointer;
  font-size: 1.3rem;
}

.backdrop {
  position: fixed;
  inset: 0;
  background: rgba(2, 9, 20, 0.72);
  display: grid;
  place-items: center;
  z-index: 50;
  padding: 20px;
}

.hidden {
  display: none !important;
}

.modal {
  position: relative;
  width: min(440px, calc(100vw - 24px));
  padding: 28px 22px 22px;
  border-radius: 20px;
  border: 1px solid rgba(98, 190, 255, 0.7);
  background: linear-gradient(180deg, rgba(15, 46, 82, 0.98), rgba(7, 21, 42, 0.98));
  box-shadow: 0 28px 60px rgba(0, 0, 0, 0.42);
}

.modal-header h3 {
  margin: 8px 0 4px;
  font-size: 2rem;
  letter-spacing: -0.06em;
}

.modal p {
  color: var(--muted);
  margin: 0 0 16px;
}

.form-block {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.form-block label {
  color: #d9eeff;
  font-size: 0.8rem;
  font-weight: 700;
}

.form-block input {
  width: 100%;
  border: 1px solid rgba(103, 172, 255, 0.7);
  border-radius: 12px;
  background: rgba(5, 13, 29, 0.75);
  color: white;
  padding: 12px 14px;
  outline: none;
}

.checkbox-row {
  display: flex;
  align-items: flex-start;
  gap: 8px;
  color: #d7eeff;
  font-size: 0.82rem;
  line-height: 1.5;
}

.checkbox-row input {
  width: auto;
  margin-top: 4px;
}

.error-text {
  min-height: 20px;
  color: #ff8ca0;
  font-size: 0.8rem;
}

.wide-btn {
  width: 100%;
  margin-top: 4px;
}

.close-btn {
  position: absolute;
  top: 10px;
  right: 12px;
  border: 0;
  background: transparent;
  color: white;
  font-size: 2rem;
  line-height: 1;
  cursor: pointer;
  opacity: 0.8;
}

.code-box {
  min-height: 54px;
  display: grid;
  place-items: center;
  padding: 12px 16px;
  border-radius: 12px;
  border: 1px dashed rgba(124, 219, 255, 0.8);
  background: rgba(18, 92, 168, 0.25);
  color: #c7f6ff;
  font-weight: 900;
  letter-spacing: 0.2em;
}

.toast {
  position: fixed;
  left: 50%;
  bottom: 24px;
  transform: translateX(-50%) translateY(14px);
  opacity: 0;
  pointer-events: none;
  max-width: min(420px, calc(100vw - 28px));
  padding: 12px 18px;
  border-radius: 12px;
  border: 1px solid rgba(96, 203, 255, 0.8);
  background: rgba(13, 39, 69, 0.96);
  color: white;
  font-weight: 700;
  box-shadow: 0 16px 32px rgba(0,0,0,0.28);
  transition: opacity 0.22s ease, transform 0.22s ease;
  z-index: 60;
}

.toast.show {
  opacity: 1;
  transform: translateX(-50%) translateY(0);
}

@media (max-width: 980px) {
  .page-shell {
    width: min(100% - 24px, 1200px);
  }

  .hero-panel {
    grid-template-columns: 1fr;
  }

  .games-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .community-panel {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 720px) {
  .topbar {
    flex-wrap: wrap;
    justify-content: center;
    padding: 14px 12px 18px;
  }

  .main-nav {
    order: 3;
    width: 100%;
    justify-content: space-around;
    gap: 12px;
  }

  .hero-panel {
    padding: 20px 14px 18px;
  }

  .hero-copy h1 {
    font-size: clamp(2.5rem, 13vw, 4rem);
  }

  .hero-notes {
    flex-direction: column;
    align-items: flex-start;
  }

  .stats-bar {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .stat-box {
    border-right: none;
    border-bottom: 1px solid rgba(255,255,255,0.06);
  }

  .games-grid {
    grid-template-columns: 1fr;
  }

  .brand-wrap {
    min-width: 0;
  }
}

@media (max-width: 460px) {
  .page-shell {
    width: min(100% - 12px, 1200px);
  }

  .topbar {
    border-radius: 18px;
  }

  .brand-title {
    font-size: 1.5rem;
  }

  .hero-actions {
    flex-direction: column;
    align-items: stretch;
  }

  .hero-actions .primary-btn {
    width: 100%;
  }

  .stats-bar {
    grid-template-columns: 1fr;
  }

  .leaderboard-head {
    grid-template-columns: 1.2fr 0.8fr 0.5fr;
  }

  .leader-row {
    grid-template-columns: 26px 1fr 0.7fr 0.5fr;
    gap: 8px;
    font-size: 0.78rem;
  }
}















































































































































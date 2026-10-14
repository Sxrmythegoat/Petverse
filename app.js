/* PetVerse — closer to the provided mockup */
:root {
  --bg-1: #0a2d68;
  --bg-2: #092245;
  --panel: rgba(8, 25, 54, 0.85);
  --panel-2: rgba(10, 35, 75, 0.9);
  --panel-3: rgba(14, 52, 94, 0.88);
  --line: rgba(125, 206, 255, 0.42);
  --line-strong: rgba(103, 190, 255, 0.82);
  --blue: #1b82ff;
  --blue-2: #57d6ff;
  --cyan: #76e4ff;
  --gold: #ffd965;
  --purple: #7756ff;
  --teal: #4de1d9;
  --text: #f1f8ff;
  --muted: #b7d6f6;
  --shadow: 0 18px 40px rgba(5, 11, 26, 0.42);
  --card-shadow: 0 10px 24px rgba(1, 9, 18, 0.26);
}

* { box-sizing: border-box; }

html { scroll-behavior: smooth; }

body {
  margin: 0;
  min-height: 100vh;
  font-family: Inter, "Segoe UI", system-ui, sans-serif;
  color: var(--text);
  background:
    radial-gradient(circle at 12% 12%, rgba(153, 116, 255, 0.26), transparent 18%),
    radial-gradient(circle at 78% 18%, rgba(144, 215, 255, 0.16), transparent 22%),
    linear-gradient(180deg, #0a3d8a 0%, #091d43 18%, #07192f 100%);
  overflow-x: hidden;
}

body::before,
body::after {
  content: "";
  position: fixed;
  inset: auto;
  pointer-events: none;
  z-index: 0;
}

body::before {
  left: 0;
  right: 0;
  bottom: -30px;
  height: 380px;
  background:
    radial-gradient(circle at 15% 100%, rgba(55, 236, 156, 0.28), transparent 16%),
    radial-gradient(circle at 50% 100%, rgba(70, 206, 255, 0.18), transparent 26%),
    radial-gradient(circle at 80% 100%, rgba(164, 100, 255, 0.22), transparent 18%);
}

button, input {
  font: inherit;
}

.site-bg {
  position: fixed;
  inset: 0;
  z-index: 0;
  pointer-events: none;
  background:
    radial-gradient(circle at 16% 36%, rgba(245, 169, 244, 0.24), transparent 14%),
    radial-gradient(circle at 80% 42%, rgba(109, 174, 255, 0.18), transparent 12%),
    radial-gradient(circle at 8% 70%, rgba(157, 210, 255, 0.14), transparent 16%),
    radial-gradient(circle at 92% 70%, rgba(107, 236, 184, 0.14), transparent 18%);
}

.page-shell {
  position: relative;
  z-index: 1;
  width: min(1240px, calc(100% - 26px));
  margin: 18px auto 32px;
}

.topbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 18px;
  min-height: 86px;
  background: rgba(5, 24, 52, 0.9);
  border: 1px solid rgba(95, 180, 255, 0.42);
  border-radius: 18px 18px 14px 14px;
  box-shadow: var(--shadow);
  padding: 10px 18px 10px 14px;
}

.brand-wrap {
  display: flex;
  align-items: center;
  gap: 10px;
  min-width: 220px;
}

.brand-mark {
  width: 42px;
  height: 42px;
  display: grid;
  place-items: center;
  border-radius: 12px;
  font-size: 26px;
  background: linear-gradient(180deg, rgba(126, 213, 255, 0.2), rgba(17, 88, 174, 0.18));
  box-shadow: inset 0 0 0 1px rgba(155, 218, 255, 0.5);
}

.brand-text {
  display: flex;
  flex-direction: column;
  line-height: 0.96;
}

.brand-title {
  font-weight: 950;
  font-size: clamp(1.6rem, 2.3vw, 2.1rem);
  letter-spacing: -0.08em;
}

.brand-title span { color: var(--gold); }

.brand-text small {
  color: #9ddcff;
  font-size: 9px;
  letter-spacing: 0.2em;
  margin-top: 6px;
}

.main-nav {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 28px;
}

.main-nav a {
  color: #dfeeff;
  text-decoration: none;
  font-size: 0.94rem;
  font-weight: 800;
  opacity: 0.92;
}

.main-nav a:hover {
  color: var(--cyan);
}

.primary-btn {
  border: 1px solid rgba(116, 216, 255, 0.8);
  background: linear-gradient(180deg, #49ccff 0%, #1686ff 76%);
  color: white;
  border-radius: 12px;
  padding: 12px 18px;
  font-weight: 800;
  box-shadow: 0 6px 0 rgba(16, 72, 150, 0.8), 0 12px 18px rgba(16, 90, 208, 0.22);
  cursor: pointer;
  transition: transform 0.15s ease, filter 0.15s ease;
}

.primary-btn:hover {
  transform: translateY(-1px);
  filter: brightness(1.08);
}

.primary-btn.alt {
  background: rgba(16, 36, 65, 0.18);
  box-shadow: inset 0 0 0 1px rgba(125, 220, 255, 0.6);
}

.primary-btn.accent {
  padding-inline: 20px;
}

.page-main {
  margin-top: 18px;
  border-radius: 26px;
  overflow: hidden;
  border: 1px solid rgba(95, 181, 255, 0.45);
  box-shadow: var(--shadow);
}

.hero-shell {
  display: grid;
  grid-template-columns: 1.08fr 0.92fr;
  gap: 22px;
  padding: 26px 22px 18px;
  background:
    radial-gradient(circle at 78% 30%, rgba(80, 200, 255, 0.16), transparent 26%),
    linear-gradient(145deg, rgba(8, 55, 110, 0.98), rgba(8, 25, 52, 0.98));
  border-bottom: 1px solid rgba(118, 203, 255, 0.38);
  position: relative;
  min-height: 430px;
}

.hero-shell::before {
  content: "";
  position: absolute;
  inset: 0;
  background:
    radial-gradient(circle at 20% 100%, rgba(117, 243, 182, 0.2), transparent 18%),
    linear-gradient(180deg, transparent 40%, rgba(8, 17, 35, 0.12));
  pointer-events: none;
}

.hero-copy,
.hero-art {
  position: relative;
  z-index: 1;
}

.hero-copy {
  padding: 14px 10px 0 8px;
}

.eyebrow {
  color: var(--cyan);
  font-size: 0.72rem;
  font-weight: 900;
  letter-spacing: 0.18em;
  text-transform: uppercase;
}

.hero-copy h1 {
  margin: 16px 0 14px;
  font-size: clamp(3.1rem, 4.8vw, 5.3rem);
  line-height: 0.96;
  letter-spacing: -0.08em;
  font-weight: 1000;
}

.hero-copy p {
  margin: 0;
  color: rgba(228, 241, 255, 0.9);
  font-size: 1.06rem;
  line-height: 1.7;
}

.hero-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 22px;
}

.hero-meta {
  display: flex;
  flex-wrap: wrap;
  gap: 18px;
  margin-top: 20px;
  color: rgba(217, 235, 255, 0.85);
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
  width: min(90%, 440px);
  height: 270px;
}

.mini-pet {
  position: absolute;
  bottom: 18px;
  width: 120px;
  height: 116px;
  display: grid;
  place-items: center;
  font-size: 4.2rem;
  border-radius: 18px;
  background: linear-gradient(145deg, #96a7c1, #667e9b 76%);
  border: 3px solid rgba(201, 233, 255, 0.9);
  box-shadow: inset 0 0 0 2px rgba(255,255,255,0.18), 0 18px 35px rgba(3, 12, 30, 0.3);
}

.pet-left {
  left: 10%;
  transform: rotate(-8deg) scale(0.84);
}

.pet-mid {
  left: 50%;
  transform: translateX(-50%);
  width: 160px;
  height: 160px;
  z-index: 2;
  background: linear-gradient(145deg, #b0bbcc, #7087a7 76%);
}

.pet-right {
  right: 10%;
  transform: rotate(8deg) scale(0.84);
}

.big-cat-box {
  position: absolute;
  right: 18%;
  top: 50%;
  transform: translateY(-50%);
  width: 210px;
  height: 180px;
  display: grid;
  place-items: center;
  border-radius: 28px;
  background: linear-gradient(145deg, #9ea8b8, #5d738d 80%);
  border: 3px solid rgba(214, 236, 255, 0.9);
  font-size: 8rem;
  box-shadow: 0 18px 32px rgba(1, 7, 18, 0.26), inset 0 0 0 2px rgba(255,255,255,0.15);
  z-index: 3;
}

.ps99-badge {
  position: absolute;
  right: 6%;
  top: 52%;
  width: 110px;
  height: 110px;
  display: grid;
  place-items: center;
  border-radius: 18px;
  background: linear-gradient(180deg, rgba(130, 210, 255, 0.22), rgba(56, 118, 191, 0.28));
  border: 2px solid rgba(122, 222, 255, 0.72);
  color: #b7ecff;
  font-weight: 900;
  font-size: 2rem;
  box-shadow: inset 0 0 0 1px rgba(255,255,255,0.1), 0 18px 28px rgba(0,0,0,0.18);
}

.mini-shape {
  position: absolute;
  width: 26px;
  height: 26px;
  border-radius: 8px;
  background: linear-gradient(180deg, rgba(166, 234, 255, 0.7), rgba(62, 150, 234, 0.35));
  box-shadow: inset 0 0 0 1px rgba(255,255,255,0.2), 0 10px 18px rgba(74, 173, 255, 0.2);
  transform: rotate(12deg);
}

.crystal-one { left: 10%; top: 18%; }
.crystal-two { right: 11%; top: 15%; }
.crystal-three { right: 22%; bottom: 12%; }
.crystal-four { left: 18%; bottom: 12%; }

.stats-bar {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  background: rgba(8, 29, 61, 0.95);
  border: 1px solid rgba(104, 181, 255, 0.42);
  border-top: none;
  overflow: hidden;
  box-shadow: var(--shadow);
}

.stat-box {
  display: grid;
  grid-template-columns: auto 1fr;
  align-items: center;
  gap: 8px 14px;
  min-height: 98px;
  padding: 18px 18px 16px;
  border-right: 1px solid rgba(255,255,255,0.08);
}

.stat-box:last-child { border-right: none; }

.stat-icon {
  width: 38px;
  height: 38px;
  display: grid;
  place-items: center;
  border: 1px solid rgba(160, 213, 255, 0.6);
  border-radius: 12px;
  background: rgba(14, 60, 101, 0.72);
  font-size: 1.5rem;
  grid-row: 1 / span 2;
}

.stat-number {
  font-size: clamp(1.4rem, 2vw, 2.2rem);
  font-weight: 950;
  letter-spacing: -0.08em;
  line-height: 1;
}

.stat-label {
  grid-column: 2;
  color: rgba(210, 228, 250, 0.72);
  font-size: 0.68rem;
  letter-spacing: 0.14em;
  font-weight: 800;
}

.games-panel,
.bottom-panel {
  margin-top: 28px;
}

.games-panel {
  background: rgba(8, 25, 56, 0.9);
  border-radius: 24px;
  border: 1px solid rgba(101, 185, 255, 0.42);
  box-shadow: var(--shadow);
  padding: 18px 18px 22px;
}

.section-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  margin-bottom: 18px;
}

.section-title {
  display: flex;
  align-items: center;
  gap: 10px;
}

.spark {
  font-size: 1.3rem;
}

.section-header h2 {
  margin: 0;
  font-size: clamp(2rem, 3vw, 3rem);
  letter-spacing: -0.08em;
  font-weight: 950;
}

.demo-pill {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 8px 14px;
  border: 1px solid rgba(115, 204, 255, 0.75);
  border-radius: 999px;
  background: rgba(14, 54, 92, 0.8);
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
  min-height: 270px;
  padding: 18px 18px 16px;
  border-radius: 18px;
  border: 1px solid rgba(101, 182, 255, 0.5);
  box-shadow: var(--card-shadow);
  background: linear-gradient(160deg, rgba(22, 56, 118, 0.9), rgba(10, 20, 42, 0.94));
}
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
Requires Node.js 20.x (recommend 20.21.0).

```bash
npm install
npm start
```
Open http://localhost:3000.

## Deployment notes
This project depends on the native module `better-sqlite3`. Prebuilt binaries are only available for specific Node.js major versions. If you see a native crash (e.g. assertion failures in better-sqlite3) when starting the app on your hosting provider, do one of the following:

- Configure the host to use Node.js 20.x (recommended). On Render, set the Node version in the service settings or add an environment/runtime setting to pin Node to 20.x.
- Or force a rebuild of the native module during install by running `npm rebuild better-sqlite3 --update-binary` (the project includes a postinstall script to attempt this).

If issues persist, delete `node_modules` and `package-lock.json` locally and run `npm ci` with Node 20, then redeploy.

## Demo flow
1. Click Create account and enter a Roblox username.
2. Confirm the age notice.
3. The demo displays a verification code; enter it to verify the local demo account.
4. Play Color Dice or Coinflip with 1,000 virtual demo points.

## Important limitations
This is a **demo starter**, not production-ready. It does not connect to Roblox, check a Roblox profile, process real pets or gems, support deposits/withdrawals, or implement real-value gambling. [...]

Before production, add secure server-side sessions, CSRF protection, strict CSP, moderation/reporting, monitoring, backups, tests, and a reviewed database migration. The current demo stores a user session in sessionStorage and uses a local SQLite database, which are fine for a local demo but not for production.

PetVerse is a fan-made demo and is not affiliated with Roblox or BIG Games.

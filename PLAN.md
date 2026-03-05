# Production Readiness Plan

A tracked checklist for cleaning up the Hospital Website Project and deploying it.
Check off items as they are completed.

---

## Phase 1 — Secrets & Security (highest priority)

> Do this before any further commits. Credentials are currently live on GitHub.

- [x] **Manually**: Rotate/delete the exposed MongoDB user (`sample2022`) in Atlas → Database Access
- [x] **Manually**: Create a new MongoDB Atlas M0 (free) cluster with a fresh user and strong password
- [x] Add bare `.env` to `.gitignore` (currently only `.env.local` variants are ignored)
- [x] Create `.env.example` documenting required environment variables
- [x] Uncomment and wire up `dotenv` in `server.js`, `APIs/userApi.js`, `APIs/appointmentApi.js`
- [x] **Manually**: Create a local `.env` file using `.env.example` as a template (never commit this)

---

## Phase 2 — Bug Fixes

- [x] Fix `ObjectID` (deprecated) → `ObjectId` in `APIs/appointmentApi.js`
- [x] Fix `deleteMany(...).toArray()` bug — also switched to `deleteOne` (deleting by unique ID)
- [x] Fix JWT expiry — was `100` seconds, now `"7d"`
- [x] Add proper HTTP status codes to error responses (401, 404, 409, 500)
- [x] Add `cors` middleware to `server.js`
- [x] Protect `/getusers`, `/getappointments`, `/get-my-appointments`, `/delete-appointment` with JWT middleware (created `APIs/verifyToken.js`)

---

## Phase 3 — Package Updates

- [x] Update `jsonwebtoken` 8.5.1 → 9.0.3
- [x] Update `axios` 0.27.2 → 1.13.6
- [x] Update `mongodb` 4.6.0 → 7.1.0
- [x] Update `nodemon` 2.x → 3.1.14
- [x] Update `@fortawesome/*` 5.x → 6.x
- [x] Update `styled-components` 5.x → 6.x
- [x] Replace `react-elastic-carousel` with `embla-carousel-react`
- [x] Migrate from CRA (`react-scripts`) to **Vite** — created `vite.config.js`, new root `index.html`
- [x] Update `react` 17 → 19 and `react-dom` 17 → 19 (latest stable)
- [x] Update `@reduxjs/toolkit` 1.x → 2.x and `react-redux` 8 → 9 (fixed `extraReducers` builder syntax)
- [x] Update `react-router-dom` 6.2 → 7.x, `react-bootstrap` 2.1 → latest, `react-chartjs-2` 4 → 5
- [x] Remove `gh-pages`, `react-scripts`, `browserslist`, CRA eslint config
- [x] Fixed hardcoded `localhost:4000` URLs → relative paths in all frontend files
- [x] Added Bearer token to protected axios calls in frontend
- [x] Fixed `store.js` case-sensitive import (`slices` → `Slices`) — would break on Linux/Render
- [x] **Build verified** — `npm run build` succeeds cleanly

---

## Phase 4 — Structure & Deployment (Render)

- [x] Separate frontend and backend scripts cleanly in `package.json` (`dev`/`build`/`preview`/`start`/`server`)
- [x] Ensure `server.js` uses `process.env.PORT` (done in Phase 1)
- [x] Add a `render.yaml` for Render deployment config
- [ ] **Manually**: Set environment variables in Render dashboard (`MONGO_URI`, `JWT_SECRET`)
- [ ] Test full production build locally before deploying
- [ ] Deploy to Render

---

## Notes

- **MongoDB**: Use MongoDB Atlas M0 (free tier, 512MB). When creating a cluster, select "M0 Free" on the tier selection screen — it's easy to accidentally select a paid tier.
- **Render**: The current setup (Express serving the React build) works well for Render as a single web service. No need for separate frontend hosting.
- **`.env` never gets committed**: It's in `.gitignore`. Use `.env.example` to document what variables are needed.

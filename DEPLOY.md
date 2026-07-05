# Aura Beauty — How to Put This Website Online

This folder is the complete, ready-to-deploy Aura Beauty website
(React + Vite + Tailwind). It has been tested and **builds cleanly**.
You do **not** need to edit any code or add any settings.

Booking and payments are handled by **Square Appointments** through links, so
the site is fully static — no server, database, or API keys required.

There are two easy ways to publish it. **Option A is the simplest.**

---

## Option A — Deploy straight to Vercel with the CLI (no GitHub needed)

If you can open a terminal, this is the fastest path:

```bash
npm i -g vercel        # install Vercel's tool (one time)
cd aura-push           # go into this unzipped folder
vercel                 # follow the prompts, accept all defaults
```

Vercel automatically reads `vercel.json` and publishes the site, then prints a
live `*.vercel.app` URL. Run `vercel --prod` to promote it to production.

---

## Option B — Put the code on GitHub, then connect Vercel

Use this if you want the code stored in `aurabeautyllc/aurabeauty`.

### Step 1 — Upload files to GitHub (website only, no terminal)
1. Sign in to GitHub as **aurabeautyllc**.
2. Open **https://github.com/aurabeautyllc/aurabeauty**.
3. Click **Add file → Upload files**.
4. Unzip the file I gave you and drag in the **contents** of the `aura-push`
   folder — i.e. `client`, `shared`, `package.json`, `vercel.json`,
   `vite.config.ts`, etc. (not the outer folder itself).
5. Click **Commit changes**.

### Step 2 — Connect to Vercel
1. Go to **https://vercel.com/new**.
2. Click **Import** next to `aurabeautyllc/aurabeauty`.
   (If it's not listed, click **Adjust GitHub App Permissions** and give Vercel
   access to that repo.)
3. Leave all settings at their defaults — `vercel.json` configures everything.
   **No environment variables are needed.**
4. Click **Deploy**. The first build takes ~1–2 minutes.

You'll get a live URL like `aurabeauty.vercel.app`. Add a custom domain later
under **Project → Settings → Domains**.

---

## Run it locally (optional)
```bash
pnpm install
pnpm dev          # http://localhost:3000
pnpm build        # production build into dist/
npx serve dist    # preview the production build
```

---

## What's already configured
- **`vercel.json`** — Build: `vite build` · Output: `dist` · SPA routing so
  `/services` and `/gallery` work on refresh.
- **`vite.config.ts`** — clean build config (Manus-only plugins removed).
- **All photos** are bundled in `client/public/manus-storage/` and load with no
  external dependencies.
- **All "Book" buttons** link to your live Square Appointments page:
  `https://book.squareup.com/appointments/6bqoexhg99i4mc/location/LMFQB9H9VH0H1`
- **Instagram** link points to `@aurabeauty444`.

## Notes
- Node 18+ is fine (Vercel's default).
- If `pnpm install` ever complains about the lockfile, the install command in
  `vercel.json` already uses `--no-frozen-lockfile`.

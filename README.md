# DELO Studio - Design Philosophy Guide

A professional landing page for design philosophy consulting services.

## Built with

- React 19
- Vite
- Tailwind CSS
- Radix UI
- Deployed on Vercel

## Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Deployment (Vercel)

Vercel automatically builds every commit pushed to the `main` branch. If you need to trigger a new deployment without making code changes, choose one of the following options:

1. **Manual redeploy in the dashboard**
   - Open the project in the [Vercel dashboard](https://vercel.com/dashboard).
   - Select the latest deployment.
   - Click **Redeploy** → **Redeploy** to rebuild from the same commit.

2. **Create a new commit**
   - Make a small change (for example, update documentation).
   - Commit and push to `main` to start a fresh build automatically.

3. **Use the CLI**
   - Install the Vercel CLI (`npm i -g vercel`).
   - Run `vercel deploy --prod` from the repository root after logging in with `vercel login`.

Any of these actions will start a new build so the latest version becomes available at your production URL.

## Verifying GitHub vs. local commits

If Vercel or GitHub shows an unexpected commit, confirm that your local branch matches the remote with:

```bash
pnpm run check:remote
```

The command prints both the local `HEAD` and the latest commit on `iliawerner/delo@main`. Pass a different repository or branch if you are working from a fork:

```bash
pnpm run check:remote your-fork/your-repo your-branch
```

When the SHAs differ, push the missing commits to GitHub (for example with `git push origin main`) or pull the remote branch to update your local copy before redeploying.

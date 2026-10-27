# Portfolio

Personal portfolio site for Jaden Leonard, built with React.

🔗 **Live site:** [leonardjaden.work](https://leonardjaden.work)

## Stack

- React 19 (Vite)
- React Icons

## Getting Started

```bash
nvm install      # use patched Node from .nvmrc
npm ci           # install locked dependencies
npm start        # run locally at http://localhost:3000
npm test -- --runInBand
npm run build    # production build in docs/
```

## Deployment

Hosted via GitHub Pages with a custom domain (configured in `docs/CNAME`). The production build is output to `docs/`, which Pages serves directly.

For Render, use a **Static Site**, build command `npm ci && npm run build`, and publish directory `docs`. Do not use `npm start` as a production server.

## October 2026 security update

Node is pinned to **22.23.4** for the [Node.js security fixes](https://nodejs.org/en/blog/vulnerability/october-2026-security-releases) and [eMudhra remediation](https://render.com/docs/advisory-emudhra). Builds reject older runtimes. No PHP or Docker runtime is used in this repository.

On an existing Render service:

1. Update `NODE_VERSION` to `22.23.4`, or remove it to use `.node-version`; the dashboard setting takes precedence.
2. Set the build command and publish directory above, then deploy the updated commit with a fresh build. This also refreshes Render's system certificate store.
3. Confirm the successful build used Node `22.23.4` or a newer 22.x release and check the deployed site.

Run `npm audit` for dependency checks. Keep secrets out of frontend code and environment variables exposed to the browser. Dependency checks do not verify deployed infrastructure or guarantee that an application is vulnerability-free.

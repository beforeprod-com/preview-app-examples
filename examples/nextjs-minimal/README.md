# Next.js Minimal Preview Example

Minimal Next.js application demonstrating Beforeprod preview deployments.

## Requirements

- Node.js 20.9+
- Beforeprod account with `BP_USER` and `BP_PASSWORD` credentials

## Local Development

```bash
# Install dependencies
npm install

# Development server (hot reload)
npm run dev

# Production build
npm run build

# Production server (port 4522)
npm start
```

## Build Artifacts

After `npm run build`, the `.next` directory contains the production build.
Beforeprod expects the build at port 4522, configured in `next.config.js` and `package.json`.

## Deployment Configuration

### Secrets Required

Add these to your repository (Settings → Secrets and variables → Actions):

**Option A: Token-based (recommended)**

| Secret | Description |
|--------|-------------|
| `SHPR_TOKEN` | Beforeprod API token |

**Option B: Username/Password**

| Secret | Description |
|--------|-------------|
| `BP_USER` | Beforeprod username |
| `BP_PASSWORD` | Beforeprod password |

### Workflow Permissions

Deploy workflow needs `pull-requests: write` for PR description updates.
Cleanup workflow needs `pull-requests: read` to find the deployment URL.

### Action Reference

This example uses [`beforeprod-com/preview-deployment-action`](https://github.com/beforeprod-com/preview-deployment-action) at commit `83d462340daea49fd9e6b16d88dc89bb64b95bf9` (shpr v0.0.43).

## Enabling Automatic Deployments

The workflows in `.github/workflows/` are configured for manual dispatch only by default.
To enable automatic PR deployments:

1. Uncomment the `pull_request` trigger in `nextjs-preview-deploy.yml`
2. Uncomment the `pull_request` trigger in `nextjs-preview-cleanup.yml`
3. Ensure secrets are configured

## Branch Marker

The app displays a `BRANCH_MARKER` environment variable for verification.
Set this in your workflow or deployment environment to identify the deployed branch.

## License

MIT License - see repository root LICENSE file.

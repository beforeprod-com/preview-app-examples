# Next.js Minimal Preview Example

Minimal Next.js application demonstrating Beforeprod preview deployments.

## Requirements

- Node.js 20.9+
- Beforeprod alpha account with CI credentials

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

This example's workflows use username/password authentication for CI detection and deployment. Add these to your repository (Settings → Secrets and variables → Actions):

| Secret | Description |
|--------|-------------|
| `BP_USER` | Beforeprod username |
| `BP_PASSWORD` | Beforeprod password |

Obtain credentials through the Beforeprod alpha onboarding process. Token-based authentication may be supported in other configurations; this example uses `BP_USER`/`BP_PASSWORD` as tested.

### Workflow Permissions

Deploy workflow needs `pull-requests: write` for PR description updates.
Cleanup workflow needs `pull-requests: read` to find the deployment URL.

### Automatic PR Triggers

The workflows automatically trigger on pull requests affecting files in `examples/nextjs-minimal/**`:

- **Deploy:** Runs on `opened`, `synchronize`, `reopened`
- **Cleanup:** Runs on `closed`

Ensure secrets are configured before opening a PR.

### Action Reference

This example uses [`beforeprod-com/preview-deployment-action`](https://github.com/beforeprod-com/preview-deployment-action) at commit `83d462340daea49fd9e6b16d88dc89bb64b95bf9` (shpr v0.0.43).

## Branch Marker

The app displays a `BRANCH_MARKER` environment variable for verification.
Set this in your workflow or deployment environment to identify the deployed branch.

## License

MIT License - see repository root LICENSE file.

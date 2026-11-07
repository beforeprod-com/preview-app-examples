# preview-app-examples

Runnable examples for deploying per-PR preview apps with [Beforeprod](https://beforeprod.com), with step-by-step guides for different frameworks.

## Examples

| Example | Framework | Status |
|---------|-----------|--------|
| [`examples/nextjs-minimal`](./examples/nextjs-minimal) | Next.js 16 + React 19 | Ready for verification |

## Quick Start

Each example includes:
- Complete application source code
- GitHub Actions workflow files (manual dispatch by default)
- Local development and build instructions
- Documentation of required secrets and permissions

### Prerequisites

- Node.js 20.9+ (for JS examples)
- Beforeprod API token (`SHPR_TOKEN` secret)

### Local Testing

```bash
cd examples/nextjs-minimal
npm install
npm run build
npm start
# Open http://localhost:4522
```

## Action Reference

Examples use [`beforeprod-com/preview-deployment-action`](https://github.com/beforeprod-com/preview-deployment-action).

**Pinned commit:** `83d462340daea49fd9e6b16d88dc89bb64b95bf9`  
**shpr version:** v0.0.43

## Deployment Activation

Workflows are configured for `workflow_dispatch` (manual trigger) by default.
To enable automatic PR deployments:

1. Configure `SHPR_TOKEN` repository secret
2. Uncomment the `pull_request` triggers in the workflow files
3. Open a PR to trigger deployment

## License

MIT License - see [LICENSE](./LICENSE) file.

# preview-app-examples

Runnable examples for deploying per-PR preview apps with [Beforeprod](https://beforeprod.com), with step-by-step guides for different frameworks.

## Examples

| Example | Framework | Status |
|---------|-----------|--------|
| [`examples/nextjs-minimal`](./examples/nextjs-minimal) | Next.js 16 + React 19 | Tested |

## Quick Start

Each example includes:
- Complete application source code
- GitHub Actions workflow files with automatic PR triggers
- Local development and build instructions
- Documentation of required secrets and permissions

### Prerequisites

- Node.js 20.9+ (for JS examples)
- Beforeprod alpha account with CI credentials (`BP_USER`, `BP_PASSWORD`)

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

## Automatic PR Deployments

Workflows trigger automatically on pull requests affecting example paths:

- **Deploy:** On PR `opened`, `synchronize`, `reopened`
- **Cleanup:** On PR `closed`

Configure `BP_USER` and `BP_PASSWORD` repository secrets before opening a PR. Obtain credentials through the Beforeprod alpha onboarding process.

## License

MIT License - see [LICENSE](./LICENSE) file.

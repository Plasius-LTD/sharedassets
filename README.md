# @plasius/sharedassets

[![npm version](https://img.shields.io/npm/v/@plasius/sharedassets.svg)](https://www.npmjs.com/package/@plasius/sharedassets)
[![Build Status](https://img.shields.io/github/actions/workflow/status/Plasius-LTD/sharedassets/ci.yml?branch=main&label=build&style=flat)](https://github.com/Plasius-LTD/sharedassets/actions/workflows/ci.yml)
[![coverage](https://img.shields.io/codecov/c/github/Plasius-LTD/sharedassets)](https://codecov.io/gh/Plasius-LTD/sharedassets)
[![License](https://img.shields.io/github/license/Plasius-LTD/sharedassets)](./LICENSE)
[![Code of Conduct](https://img.shields.io/badge/code%20of%20conduct-yes-blue.svg)](./CODE_OF_CONDUCT.md)
[![Security Policy](https://img.shields.io/badge/security%20policy-yes-orange.svg)](./SECURITY.md)
[![Changelog](https://img.shields.io/badge/changelog-md-blue.svg)](./CHANGELOG.md)

Public package containing shared static assets for Plasius frontend applications.


## Install

```bash
npm install @plasius/sharedassets
```

## Module formats

This package publishes dual ESM and CJS artifacts.
When CJS output is emitted under `dist-cjs/*.js` with `type: module`, `dist-cjs/package.json` is generated with `{ "type": "commonjs" }` to ensure Node `require(...)` compatibility.


## Usage

```ts
import { PlasiusLTDLogo } from "@plasius/sharedassets";
```

## Development

```bash
npm install
npm run build
npm test
```

## Governance

- Security policy: [SECURITY.md](./SECURITY.md)
- Code of conduct: [CODE_OF_CONDUCT.md](./CODE_OF_CONDUCT.md)
- ADRs: [docs/adrs](./docs/adrs)
- Legal docs: [legal](./legal)

## License

MIT

<!-- BEGIN PLASIUS RELEASE INTEGRITY -->
## Release integrity

CI keeps the administrative contributor registry outside Git and npm package
artifacts using exact, case-normalised path checks. CI runs only on explicit
`[self-hosted, Linux, X64]` runners with
package-manager caching disabled and checkout credentials not persisted. Each
job requires this repository and a trusted push or manual event. Trusted branch
pushes provide PR-head checks; pull-request events and external forks cannot
execute on organisation runners. Jobs have bounded timeouts and superseded
branch runs are cancelled. Publication uses the GitHub-hosted `production` job
with Node 24 and
pinned npm 11.6.2. It is token-free and proceeds only while the prepared SHA
is the exact `main` head after successful push-triggered CI. Do not dispatch CD
until the npm trusted-publisher binding is verified. Hosted release preparation,
publication dispatch, isolated validation/packing, and final publication remain
separate release roles. Monthly hosted dependency maintenance creates reviewable
PRs; it is not a replacement for trusted self-hosted CI.

Parent Feature #1597 owns `platform.public-artifact-integrity.enabled` in the
site rollout control plane. Enabled permits staged clean distribution; disabled
stops promotion. Mandatory source, artifact, and CI/CD gates always apply and
cannot be bypassed by the flag. Roll back by disabling the affected workflow or
release channel and stopping promotion, without restoring administrative paths,
reusing removed versions, or introducing npm write-token fallbacks.
<!-- END PLASIUS RELEASE INTEGRITY -->

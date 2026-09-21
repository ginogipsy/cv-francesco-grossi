# CV Francesco Grossi - Claude Documentation

## Project Overview
Applicazione Web (Angular 21) per la visualizzazione del curriculum vitae.

## Versioning & CI/CD
- **Branching Model**: `git flow`. `develop` per lo sviluppo, `master` per la produzione.
- **Version Management**: Gestita in `package.json`.
- **CI/CD Pipeline**: `ci-cd.yml` esegue la build e i test su branch/PR. La pubblicazione dell'immagine Docker avviene via `deploy.yml` al push di un tag `v*.*.*` (creato automaticamente da `release.yml` al merge su `master`).
- **Release Automation (Smart Versioning)**: Al merge su `master`, il workflow `release.yml` determina la versione dal nome del branch o dalle etichette PR.

## Build & Run Commands
- Install: `npm install`
- Start: `npm start`
- Build: `npm run build`
- Test: `npm test`

# CI/CD — GitHub Actions (cv-francesco-grossi)

> [!IMPORTANT]
> **Configurazione per il deploy automatico sul tag**
> Un tag pushato con il `GITHUB_TOKEN` di default non fa partire altri workflow
> (è una protezione anti-loop di GitHub Actions). Siccome `release.yml` crea il
> tag da solo, senza un token dedicato `deploy.yml` non parte.
> 1. Crea un **fine-grained PAT**: **Settings** → **Developer settings** →
>    **Personal access tokens** → **Fine-grained tokens** → **Generate new token**.
>    - *Resource owner*: il proprietario del repo — *Repository access*: solo `cv-francesco-grossi`
>    - *Repository permissions* → **Contents: Read and write** (unico permesso necessario:
>      al token serve solo pushare il tag e il commit di bump)
>    - Con un PAT classico basta lo scope `public_repo`: il repo è pubblico e
>      `repo` darebbe scrittura su tutti i repository dell'account.
> 2. Salvalo nel repo come secret **`RELEASE_TOKEN`** (**Settings** → **Secrets and variables** → **Actions**).
>
> Senza il secret la release viene creata comunque, ma il deploy va lanciato a
> mano: **Actions** → *Deploy image* → **Run workflow**, selezionando il tag.

> [!WARNING]
> Il fallback `secrets.RELEASE_TOKEN || secrets.GITHUB_TOKEN` in `release.yml`
> non rompe nulla se il secret manca — ma **alla scadenza del PAT il deploy
> smette di partire senza segnalare errori**: `release.yml` continua a taggare
> regolarmente. Annota la data di scadenza, oppure passa a un token di GitHub
> App (`actions/create-github-app-token`), che non scade.

## Workflow

| File | Scopo | Trigger |
|---|---|---|
| `ci-cd.yml` | Build & Test | Push su branch, PR |
| `release.yml` | Tag & GitHub Release | Push su `master` |
| `deploy.yml` | Build & push immagine su GHCR | Push del tag `v*.*.*` (o dispatch da tag) |
| `qodana_code_quality.yml` | Analisi statica della qualità del codice | Push su branch/tag, PR |

## Allineamento a git flow

| Evento | build & test | Docker Build | Push su GHCR | Release/Tag |
|---|---|---|---|---|
| PR → `develop` / `master` | ✅ | ❌ | ❌ | ❌ |
| push su `develop` / `feature/*` | ✅ | ❌ | ❌ | ❌ |
| push su `master` | ✅ | ❌ | ❌ | **Smart Versioning** |
| tag `v*.*.*` | — | ✅ | 🚀 `:X.Y.Z` + `:latest` | ❌ |

## Deploy sulla VM

L'immagine viene costruita sul runner GitHub, non sulla e2-micro: la VM fa solo
il pull.

```bash
docker pull ghcr.io/<owner>/cv-francesco-grossi:latest
docker rm -f cv && docker run -d --name cv --restart unless-stopped \
  -p 127.0.0.1:8080:80 ghcr.io/<owner>/cv-francesco-grossi:latest
```

Il container resta in ascolto solo su localhost: la TLS la termina l'Nginx della
VM, che fa da reverse proxy verso la porta 8080.

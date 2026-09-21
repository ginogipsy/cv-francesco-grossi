# Guida ai Rilasci e Versionamento (CV App)

> [!IMPORTANT]
> **Pulsante "Approve" (Terzo Pallino)**
> Se sui branch di sviluppo la pipeline si ferma senza mostrare il tasto "Review deployments", significa che l'ambiente non è configurato.
> **Assicurati di aver creato l'environment `cv-francesco-grossi`** in *Settings -> Environments* con la regola *Required reviewers* attiva (aggiungendo il tuo nome utente). Senza questo passaggio, il deploy manuale non può funzionare.

Questa guida spiega come gestire il ciclo di vita dell'applicazione, i rilasci su GitHub e il sistema di versionamento automatico.

## 📌 Regole del Versionamento

L'applicazione utilizza il **Semantic Versioning** all'interno del file `package.json`.

- **Major (X.0.0)**: Redesign completi o cambiamenti radicali.
- **Minor (0.X.0)**: Nuove sezioni o funzionalità significative.
- **Patch (0.0.X)**: Correzioni di bug, aggiornamenti testi o piccoli aggiustamenti.

## 🚀 Come effettuare un Rilascio

Il processo segue il modello **Git Flow**. Hai quattro modi per decidere la versione del prossimo rilascio:

### 1. Metodo Standard (Patch automatica)
1. Crea una Pull Request da `develop` a `master`.
2. Fai il Merge.
3. **Risultato**: Il bot incrementerà automaticamente la **Patch** (es. `0.1.0` -> `0.1.1`).

### 2. Tramite Etichette PR (Consigliato per Minor/Major)
1. Crea la Pull Request verso `master`.
2. Su GitHub, aggiungi l'etichetta (label) **`minor`** o **`major`**.
3. Fai il Merge.
4. **Risultato**: Il bot incrementerà la versione in base all'etichetta.

### 3. Tramite Nome del Branch (Git Flow rigido)
1. Crea un branch chiamato `release/1.2.0` (o `release/v1.2.0`).
2. Apri la PR verso `master` e fai il merge.
3. **Risultato**: Il bot forzerà esattamente la versione `1.2.0`.

### 4. Metodo Manuale (GitHub UI)
1. Vai nella tab **Actions** su GitHub.
2. Seleziona il workflow **"Release & Smart Versioning"**.
3. Clicca su **"Run workflow"**.
4. Inserisci la versione desiderata nel campo `manual_version` (es: `1.5.0`).

---

## 📦 Rilascio dell'Immagine Docker

La pubblicazione delle immagini Docker sul registry (GHCR) segue una logica differenziata per garantire velocità in produzione e controllo nello sviluppo.

### 🚀 Pubblicazione Automatica
L'immagine viene creata e pushata **automaticamente** su **GHCR** quando viene creato un **Tag Git (`v*`)**.
Il processo è:
1. Il merge su `master` attiva `release.yml`.
2. `release.yml` crea il tag di versione.
3. Il tag attiva `deploy.yml`, che pubblica l'immagine con il tag della versione e `latest`.

### ✋ Pubblicazione Manuale
È possibile pubblicare un'immagine da qualsiasi branch o tag esistente tramite la tab **Actions**:
1. Seleziona il workflow **"Deploy image"**.
2. Clicca su **"Run workflow"**.
3. Scegli il branch/tag desiderato.
4. L'immagine verrà taggata con il nome del branch scelto.

---

## 🧪 Qualità del Codice (Qodana)

Ogni commit ed ogni Pull Request viene analizzata automaticamente da **JetBrains Qodana**.
- Il report è consultabile nella tab **Checks** della Pull Request.
- Assicuratevi che non vengano introdotti nuovi "Critical" o "High" issues prima del merge.

---

## 🤖 Cosa succede dietro le quinte?

Ad ogni merge su `master`, il workflow di GitHub:
1. Determina la versione corretta tramite **Smart Versioning**.
2. Crea un **Tag Git**.
3. Crea una **GitHub Release**.
4. **Aggiorna `develop`**: Incrementa la versione in `package.json` e fa il back-merge.

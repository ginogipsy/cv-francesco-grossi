# CV / Portfolio — Francesco Grossi

Single Page Application in **Angular 21** (standalone components, zoneless, control flow `@if` / `@for`)
con tema **Tech Dark Mode** ispirato allo stile Google Cloud. Nessuna dipendenza UI esterna: solo SCSS.

## Avvio

```bash
npm install
npm start          # http://localhost:4200
npm run build      # build di produzione in dist/cv-francesco-grossi/browser
npm test           # unit test (vitest)
```

## Struttura

```
src/
├─ index.html                  meta, Open Graph, font Inter + JetBrains Mono
├─ styles.scss                 reset + design tokens (CSS custom properties)
└─ app/
   ├─ app.component.ts         dati del CV + toggle booleano della card "Palestra"
   ├─ app.component.html       layout completo della SPA
   ├─ app.component.scss       tema dark + animazione del reveal
   └─ app.component.spec.ts    test su hero, quick actions e toggle
```

## Sezioni

1. **Hero** — banner `🚀 Hosted on Google Cloud Platform (GCP Compute Engine)` con indicatore
   verde pulsante `Status: Online`, foto/avatar, bio e azioni rapide.
2. **Esperienza lavorativa** — timeline verticale (Capgemini Engineering, Alten Italia ×2, ELIS, C5 Live & K-Motion).
3. **Istruzione & Formazione** — colonna tecnica (Fincons, Generation Italy) e colonna universitaria/musicale.
4. **Tech Stack & Skills** — badge raggruppati per area, con accenti Google (blu/verde/giallo/rosso).
5. **Behind the Code** — soft skills dalle esperienze non convenzionali.
6. **Hobbies & Fun Facts** — include la card **Palestra** interattiva.

## Azioni rapide (aprono le app di sistema)

| Canale    | Link |
|-----------|------|
| Telefono  | `tel:+393493369549` |
| Email     | `mailto:francescogrossi92@outlook.it` |
| Indirizzo | Google Maps (`?api=1&query=Via+Ponzio+Cominio+00175+Roma`) |
| WhatsApp  | `https://wa.me/393493369549` |
| GitHub    | `https://github.com/ginogipsy` |
| LinkedIn  | `LINKEDIN_URL` in `app.component.ts` — **da verificare** |

## Branding

- **Logo `fg run`**: `public/favicon.svg` è l'icona quadrata (favicon). Nell'header è inline una
  variante *wordmark* più larga (viewBox `0 0 116 44`) con cursore lampeggiante, così la scritta
  resta leggibile a 38px di altezza — l'icona quadrata ridotta renderebbe il testo di ~6px.
- **Giallo terminale** `#FFD166`: token `--terminal-yellow` in `styles.scss`, usato dalle eyebrow
  di sezione (`01 — CARRIERA`, …) e dal badge della card Palestra.

## Foto profilo

`public/assets/profile.jpg` — crop quadrato 640×640 centrato sul volto, servito su `assets/profile.jpg`.
Per sostituirla basta rimpiazzare il file (o cambiare `profile.photoUrl` in `app.component.ts`).
Se il file manca, la UI mostra automaticamente le iniziali `FG` su gradiente conico — nessun errore a schermo.

## Da completare

- **LinkedIn**: l'URL non era nel CV. Verifica la costante `LINKEDIN_URL` in `app.component.ts`.

## Deploy su GCP Compute Engine

```bash
npm run build
# copia il contenuto di dist/cv-francesco-grossi/browser sulla VM
gcloud compute scp --recurse dist/cv-francesco-grossi/browser <VM>:/var/www/cv --zone=<ZONE>
```

Con Nginx, essendo una SPA serve il fallback su `index.html`:

```nginx
server {
  listen 80;
  root /var/www/cv;
  index index.html;
  location / {
    try_files $uri $uri/ /index.html;
  }
}
```

## Accessibilità & responsive

- Skip link, landmark semantici, `aria-expanded` / `aria-controls` sul toggle della palestra.
- Focus visibile su tutti gli elementi interattivi, SVG marcati `aria-hidden`.
- Breakpoint a 900px (nav compressa, hero in colonna) e 620px (timeline e avatar compatti).
- Tutte le animazioni sono disattivate con `prefers-reduced-motion: reduce`.

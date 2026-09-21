# syntax=docker/dockerfile:1

# --- Stage 1: Build ---------------------------------------------------------
FROM node:22-alpine AS build
WORKDIR /app

# Su GitHub Actions il default va bene (runner con 16 GB).
# Per una build direttamente sulla VM e2-micro:
#   docker build --build-arg NODE_OPTIONS="--max-old-space-size=512" .
ARG NODE_OPTIONS=""
ENV NODE_OPTIONS=$NODE_OPTIONS \
    CI=true \
    NG_CLI_ANALYTICS=false

# Layer separato per le dipendenze: invalidato solo quando cambia il lockfile.
COPY package.json package-lock.json ./
RUN npm ci --no-audit --no-fund

# Il resto del sorgente. Vedi .dockerignore: niente node_modules, dist, .angular.
COPY . .
RUN npm run build -- --configuration production

# --- Stage 2: Serve ---------------------------------------------------------
FROM nginx:1.27-alpine

# Rimuove i file e la configurazione di default in un solo layer.
RUN rm -rf /usr/share/nginx/html/* /etc/nginx/conf.d/default.conf

# Configurazione personalizzata per SPA (fallback, cache, gzip).
COPY nginx.conf /etc/nginx/conf.d/default.conf

# outputPath e' fissato esplicitamente in angular.json: dist/cv-francesco-grossi/browser
COPY --from=build /app/dist/cv-francesco-grossi/browser /usr/share/nginx/html

EXPOSE 80

# wget arriva da busybox, gia' presente nell'immagine alpine.
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
    CMD wget -q --spider http://127.0.0.1/healthz || exit 1

CMD ["nginx", "-g", "daemon off;"]

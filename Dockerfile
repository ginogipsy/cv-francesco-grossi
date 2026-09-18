# --- Stage 1: Build ---
FROM node:22-alpine AS build
WORKDIR /app

# Copia i file di dipendenze (sfrutta la cache dei layer)
COPY package*.json ./
RUN npm ci

# Copia il resto del codice ed esegui la build
COPY . .
RUN npm run build -- --configuration production

# --- Stage 2: Serve ---
FROM nginx:1.27-alpine

# Rimuovi la configurazione e i file di default
RUN rm -rf /usr/share/nginx/html/*
RUN rm /etc/nginx/conf.d/default.conf

# Copia la configurazione personalizzata per SPA (gestione refresh 404)
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copia la build di Angular (verifica il path in angular.json)
# Angular 17+ di default usa dist/[project-name]/browser
COPY --from=build /app/dist/cv-francesco-grossi/browser /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]

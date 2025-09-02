# ---- Build (Vite) ----
    FROM node:20-alpine AS build
    WORKDIR /app
    COPY package*.json ./
    RUN npm ci
    COPY . .
    RUN npm run build
    
    # ---- Runtime (Nginx) ----
    FROM nginx:alpine AS production   # <- dê o nome do stage
    COPY --from=build /app/dist /usr/share/nginx/html
    COPY ./nginx.conf /etc/nginx/conf.d/default.conf
    EXPOSE 80
    CMD ["nginx", "-g", "daemon off;"]
    
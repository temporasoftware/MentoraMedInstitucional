# Estágio de build
FROM node:18-alpine AS builder

# Definir diretório de trabalho
WORKDIR /app

# Copiar arquivos de dependências
COPY package*.json ./
COPY bun.lockb ./

# Instalar TODAS as dependências
RUN npm ci

# Copiar código fonte
COPY . .

# Debug: verificar se os arquivos estão lá
RUN ls -la src/

# Build da aplicação
RUN npm run build

# Estágio de produção
FROM nginx:alpine AS production

# Copiar arquivos buildados
COPY --from=builder /app/dist /usr/share/nginx/html

# Copiar configuração customizada do nginx
COPY nginx.conf /etc/nginx/nginx.conf

# Expor porta 80
EXPOSE 80

# Comando para iniciar nginx
CMD ["nginx", "-g", "daemon off;"] 
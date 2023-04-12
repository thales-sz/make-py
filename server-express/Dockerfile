FROM node:alpine AS build

WORKDIR /app

# Copiar os arquivos de instalação
# COPY package.json .
# COPY package-lock.json .
COPY package*.json .

# Instalar dependência para a build
# RUN npm install 
# RUN - Construção da imagem
RUN npm ci

# Copiar os arquivos .ts
COPY . .

EXPOSE 3001

# Transpilar meu código para .js
RUN npm run build

## MULTISTAGE
FROM node:alpine AS app

WORKDIR /app

# Copiar os arquivos de instalação
COPY package*.json .

# Instalar apenas as dependências de produção
RUN npm ci --production

# Copiar os arquivos de build do stage anterior (build)
COPY --from=build /app/dist /app/dist

# Comando que vai rodar o nosso programa
# ENTRYPOINT [ "echo", "Revisao backend" ]
CMD [ "npm", "start" ]
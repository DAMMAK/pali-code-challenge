FROM node:latest
WORKDIR  /app
COPY package.json /app
COPY tsconfig.json /app
COPY src /app

RUN npm run build

EXPOSE 8055
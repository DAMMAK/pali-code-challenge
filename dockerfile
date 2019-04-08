FROM node:latest
WORKDIR  /app
COPY package.json /app
COPY tsconfig.json /app
COPY src /app

RUN npm install
RUN npm run start

EXPOSE 4000
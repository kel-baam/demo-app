FROM node:18-alpine

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm install
RUN npm install redis
RUN npm install ioredis


COPY . .

RUN npm run build

EXPOSE 3000

CMD ["npm", "run", "start"]

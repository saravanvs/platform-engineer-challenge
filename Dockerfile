FROM node:12

ENV API_URL=

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm run build

COPY . .

CMD [ "npm", "run", "start" ]

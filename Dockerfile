FROM node

RUN apt-get install bash

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . ./

EXPOSE 8080

CMD ["npm", "start"]
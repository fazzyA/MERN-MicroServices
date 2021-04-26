FROM node:alpine

WORKDIR /CS

COPY package.json ./

RUN npm install

COPY . .

EXPOSE 5001

CMD [ "npm", "start" ]
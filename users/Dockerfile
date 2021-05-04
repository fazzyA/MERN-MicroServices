FROM node:alpine

WORKDIR /user

COPY package.json ./

RUN npm install

COPY . .

EXPOSE 5002

CMD [ "npm", "start" ]
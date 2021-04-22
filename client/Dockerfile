FROM node:alpine as todo-app-build

WORKDIR /client

COPY package.json yarn.lock README.md ./

RUN yarn

COPY ./public ./public

COPY ./src ./src

RUN yarn build

FROM nginx:latest

LABEL maintainer=finosys

COPY --from=todo-app-build /client/build/ /usr/share/nginx/html

EXPOSE 80

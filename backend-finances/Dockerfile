FROM node:18-alpine3.17

RUN apk update --no-cache
RUN apk add --no-cache bash wget openssl

ENV DOCKERIZE_VERSION v0.6.1
RUN wget -O - https://github.com/jwilder/dockerize/releases/download/$DOCKERIZE_VERSION/dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz | tar xzf - -C /usr/local/bin \
    && apk del wget

RUN yarn global add @nestjs/cli@10.0.0

USER node

WORKDIR /home/node/app

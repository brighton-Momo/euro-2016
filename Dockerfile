FROM mlabouardy/nodejs
MAINTAINER mlabouardy <mohamed@labouardy.com>

# Install git
RUN apk update && apk add git
RUN npm install -g bower

COPY . /euro-2016

WORKDIR /euro-2016/app

# Install bower dependencies
RUN bower install --allow-root

WORKDIR /euro-2016

# Install npm dependencies
RUN npm install

EXPOSE 3000
CMD . set-env.sh && node server.js

# set the base image to Debian
# https://hub.docker.com/_/debian/
FROM debian:sid-slim as base

# replace shell with bash so we can source files
RUN rm /bin/sh && ln -s /bin/bash /bin/sh

RUN apt-get update
RUN DEBIAN_FRONTEND=noninteractive apt-get upgrade -y
RUN DEBIAN_FRONTEND=noninteractive apt-get install -y curl
RUN apt-get -y autoclean

RUN mkdir -p /usr/local/nvm

# nvm environment variables
ENV NVM_DIR /usr/local/nvm
ENV NODE_VERSION 12.18.3

# install nvm
# https://github.com/creationix/nvm#install-script
RUN curl --silent -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.3/install.sh | bash

# install node and npm
RUN source $NVM_DIR/nvm.sh \
&& nvm install $NODE_VERSION \
&& nvm alias default $NODE_VERSION \
&& nvm use default

# add node and npm to path so the commands are available
ENV NODE_PATH $NVM_DIR/v$NODE_VERSION/lib/node_modules
ENV PATH $NVM_DIR/versions/node/v$NODE_VERSION/bin:$PATH

# confirm installation
RUN node -v
RUN npm -v





# SOURCE BUILDER
FROM base as builder
ENV SRC_DIR /var/www/src
ADD . $SRC_DIR
WORKDIR $SRC_DIR
RUN cat $SRC_DIR/src/constants/version.js
RUN npm install
RUN npm run build





# APPLICATION
FROM base
# builder source dir
ENV SRC_DIR /var/www/src

# application dir
ENV APP_DIR /var/www

# nvm dir
ENV NVM_DIR /usr/local/nvm
RUN source $NVM_DIR/nvm.sh

# install web server
RUN npm install -g serve

# copy build to target
RUN mkdir -p $APP_DIR/build
COPY --from=builder $SRC_DIR/build $APP_DIR/build

WORKDIR $APP_DIR
EXPOSE 3000
CMD ["serve", "-s", "-p", "3000", "build"]

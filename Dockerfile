FROM nginx:1.9.9

WORKDIR /usr/src/app

RUN apt-get update --fix-missing
RUN apt-get install -y apt-utils git
RUN apt-get install -y npm
RUN ln -s /usr/bin/nodejs /usr/bin/node

COPY . /usr/src/app
RUN npm install --unsafe-perm
RUN cp -r app/* /usr/share/nginx/html

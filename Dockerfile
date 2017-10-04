FROM node:8
ADD . /code
WORKDIR /code
RUN npm i
CMD ["node_modules/.bin/nodemon", "server"]
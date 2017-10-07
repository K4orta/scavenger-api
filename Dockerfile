FROM node:8
ADD . /code
WORKDIR /code
RUN npm i
CMD ["nodemon", "server"]
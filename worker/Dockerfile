FROM node:12.7.0-alpine

WORKDIR /usr/app

COPY package*.json ./
RUN npm install 

COPY . .

EXPOSE 5000

CMD ["npm", "start"]
FROM node:12.7.0

WORKDIR /usr/app

COPY package*.json ./

RUN npm install 

COPY . .

EXPOSE 3000

CMD ["npm", "start"]
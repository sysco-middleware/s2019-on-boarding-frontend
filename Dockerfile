# Setup and build the client

FROM node:12.7.0-alpine as client

WORKDIR /usr/app/client/
COPY client/package*.json ./
RUN npm install 
COPY client/ ./
RUN npm run build


# Setup the worker

FROM node:12.7.0-alpine

WORKDIR /usr/app/
COPY --from=client /usr/app/client/build/ ./client/build/

WORKDIR /usr/app/worker/
COPY worker/package*.json ./
RUN npm install 
COPY worker/ ./

ENV PORT 5000

EXPOSE 5000

CMD ["npm", "start"]
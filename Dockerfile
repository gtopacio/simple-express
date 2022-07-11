FROM node:18-alpine3.15

ENV PORT=8000
WORKDIR /apps/simple-express
COPY ./ .
RUN npm install
ENTRYPOINT ["node", "index.js"]
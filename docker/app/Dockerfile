FROM node:18-alpine

WORKDIR /app
COPY /app /app

RUN yarn install && yarn tsc
CMD ["node", "dist/src/main.js"]

EXPOSE 3000
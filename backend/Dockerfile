FROM node:24

WORKDIR /app

COPY package*.json ./
COPY  . .

RUN npm install

EXPOSE 8000

CMD ["npm", "run", "dev"]
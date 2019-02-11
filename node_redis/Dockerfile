# Create the NODE Docker
FROM node:alpine
WORKDIR /usr/app
COPY ./package.json .
RUN npm install
COPY . .
CMD ["npm", "start"]
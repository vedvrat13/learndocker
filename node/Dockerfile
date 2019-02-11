# Setup Base Image
FROM node:alpine         
# Install dependencies
WORKDIR /usr/app
COPY ./package.json ./
RUN npm install
COPY ./ ./
CMD ["npm", "start"]
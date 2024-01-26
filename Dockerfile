FROM node:18.3.0-alpine
WORKDIR /app
COPY package.json package-lock.json ./
RUN yarn install
COPY . .
RUN yarn build
EXPOSE 8080
CMD ["yarn", "preview"]
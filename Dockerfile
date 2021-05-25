FROM node:12-alpine as build

WORKDIR /app

COPY package.json .

RUN npm install 

COPY . . 

RUN npm run build --prod

FROM nginx:1.17.1-alpine 

COPY --from=build /app/docs /usr/share/nginx/html

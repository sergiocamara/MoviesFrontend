FROM node:14-alpine as build

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm install 

COPY . . 

RUN npm run build --prod

FROM nginx:1.17.1-alpine 

COPY --from=build /app/dist/moviesfront /usr/share/nginx/html

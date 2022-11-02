FROM node:19 as builder
ENV NODE_ENV=production
WORKDIR /app
COPY package.json .
COPY src/ ./src
COPY public/ ./public
RUN ls .
RUN npm install
RUN npm run build

FROM ubuntu/nginx
COPY --from=builder ./app/build /var/www/html 
COPY nginx/conf /etc/nginx/sites-available/default

# FROM ubuntu/nginx
# COPY build /var/www/html/comics
# COPY nginx/conf /etc/nginx/sites-available/default

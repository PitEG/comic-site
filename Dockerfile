FROM ubuntu/nginx
COPY build /var/www/html/comics
COPY nginx/conf /etc/nginx/sites-available/default

FROM nginx:stable-alpine

COPY dist /usr/share/nginx/html

COPY app.conf /etc/nginx/conf.d/app.conf

EXPOSE 8081

CMD ["nginx", "-g", "daemon off;"]

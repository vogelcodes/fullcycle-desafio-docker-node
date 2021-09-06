FROM nginx:1.15.0-alpine
#removemos a configuração padrão do ngnix:
RUN rm /etc/nginx/conf.d/default.conf
#inserimos a config personalizada
COPY config/nginx.conf /etc/nginx/conf.d


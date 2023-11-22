FROM node:18-alpine as frontend

WORKDIR /spa
COPY /spa /spa

RUN yarn install && yarn build

FROM httpd:latest

RUN echo " \nIncludeOptional conf/sites/*.conf" >> /usr/local/apache2/conf/httpd.conf
RUN mkdir /usr/local/apache2/conf/sites
COPY /docker/spa/httpd.conf /usr/local/apache2/conf/sites/httpd.conf

RUN rm -rf /usr/local/apache2/htdocs/
COPY --from=frontend /spa/dist/ /usr/local/apache2/htdocs/

EXPOSE 80

CMD ["httpd", "-D", "FOREGROUND"]

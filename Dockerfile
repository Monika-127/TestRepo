FROM node:latest
WORKDIR /usr/dock
COPY ./ ./
EXPOSE 3000
CMD ["node","http_server.js"]
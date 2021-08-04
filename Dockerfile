FROM node:15-alpine AS builder

WORKDIR /app

COPY package*.json ./

RUN npm install 

COPY . .

RUN npm run build 
# ---
FROM nginx:alpine

COPY nginx.conf /etc/nginx/conf.d/configfile.template

WORKDIR /usr/share/nginx/html

RUN rm -rf *

COPY --from=builder /app/build .
EXPOSE 443
CMD ["nginx", "-g", "daemon off;"]
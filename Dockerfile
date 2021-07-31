FROM node:12.16.3-alpine as build

WORKDIR /app

COPY . ./

# ---
FROM nginx:alpine

WORKDIR /etc/nginx
ADD nginx.conf /etc/nginx/nginx.conf

COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 443
CMD ["nginx", "-g", "daemon off;"]
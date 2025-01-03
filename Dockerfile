FROM node:22-alpine AS builder

WORKDIR /app

COPY yarn.lock package.json /app/

RUN yarn install

COPY . /app/

RUN yarn build

FROM nginx:1.23-alpine

RUN rm /etc/nginx/conf.d/default.conf

COPY nginx.conf /etc/nginx/conf.d/

COPY --from=builder /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]

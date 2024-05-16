FROM node:18-alpine as step1
WORKDIR /app
COPY package.json .
# Mount with cache of node_modules
RUN --mount=type=cache,target=/app/npm/cache npm i --cache /app/npm/cache
# RUN npm i
COPY . .
RUN npm run build

FROM nginx:1.25.5-alpine
EXPOSE 80
COPY --from=step1 /app/dist /usr/share/nginx/html
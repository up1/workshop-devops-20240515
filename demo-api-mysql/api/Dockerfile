FROM node:18-alpine
# FROM node@sha256:4837c2ac8998cf172f5892fb45f229c328e4824c43c8506f8ba9c7996d702430
WORKDIR /app
COPY package*.json .
RUN npm ci
COPY . .
EXPOSE 3000
CMD ["node", "server.js"]
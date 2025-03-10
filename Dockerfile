FROM node:22-alpine
RUN mkdir -p /usr/app
WORKDIR /usr/app

COPY ./ ./
RUN npm ci
RUN npm run build

RUN cp -r ./dist ./server/public
RUN cd server && npm ci

ENV PORT=3000
CMD ["sh","-c","cd server && npm run mock-server"]

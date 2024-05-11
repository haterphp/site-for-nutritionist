FROM node:18-alpine

ARG HOST_URL
WORKDIR /app
ENV NEXT_PUBLIC_ADMIN_URL=http://localhost:1337
COPY . .
RUN npm i
EXPOSE 3000
CMD npm run dev

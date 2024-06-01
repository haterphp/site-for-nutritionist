FROM node:18

ENV NEXT_PUBLIC_ADMIN_URL=http://192.168.100.2:1337

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
EXPOSE 3000
CMD npm run start

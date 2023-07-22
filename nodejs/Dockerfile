FROM node
WORKDIR /app
COPY package*.json ./
COPY package.json ./
RUN npm install
# RUN npm i mongoose
# RUN npm  i express
# RUN npm i express-rate-limit
# RUN npm i jsonwebtoken
# RUN npm install bcryptjs 
# RUN npm install nodemailer
# RUN npm i react-router-dom
# RUN npm i cors
# RUN npm i dotenv
# RUN npm i helmet
COPY . .
EXPOSE 3000
CMD [ "npm" , "start" ]
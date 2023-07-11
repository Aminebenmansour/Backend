const express = require('express')
const clientroute = require('./Routes/client')
const cors = require('cors');
const adminroute = require('./Routes/admin')
require('./config/connect')
const app = express()
const cookieParser = require('cookie-parser');
const helmet = require('helmet');

app.use(helmet.contentSecurityPolicy());
app.use(helmet.xssFilter());
app.use(helmet.noSniff());
app.use(helmet.hsts());

/* app.use(express.urlencoded({ extended: true }));
 */
app.use(express.json())
app.use(cookieParser());
app.use(cors()); 
app.use("/client",clientroute)
app.use("/admin",adminroute)

     

  


app.listen(3000, () => {
    console.log('ahla');
  });
  
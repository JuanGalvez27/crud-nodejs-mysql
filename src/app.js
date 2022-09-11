const express = require('express');
const path = require('path');
const morgan = require('morgan');
const app = express();
const mysql = require('mysql');
const myConnection = require('express-myconnection');


// Settings
app.set('port', process.env.PORT || 3000);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Middlewares
app.use(morgan('dev'));
app.use(myConnection(mysql, {
  host: 'localhost',
  user: 'root',
  password: '93020728289Cosmo',
  port: 3306,
  database: 'crud-nodejs-mysql'
}, 'single'))

// Routers

app.listen(app.get('port'), () => {
  console.log('Server on port 3000');
});
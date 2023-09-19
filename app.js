var express = require('express');
var path = require('path')
const cors = require('cors');
const mongoose = require("mongoose");
const setupController = require('./controller/setupController');
const apiController = require('./controller/apiController');
require('dotenv').config();


var app = express();

var port = process.env.PORT || 3001

// app.set('view engine', 'ejs')
app.use('/assets', express.static(path.join(__dirname, 'public')));
app.use(cors());

const user = encodeURIComponent(process.env.USER_NAME);
const pwd = encodeURIComponent(process.env.PASSWORD);
const conn_str = `mongodb+srv://${user}:${pwd}@todo.ojfzijq.mongodb.net/?retryWrites=true&w=majority`

try {
  mongoose.connect(conn_str);
  console.log('successful connected');
} catch (error) {
  console.error(error);
}



app.get('/', (req, res) => {
  res.json({ answer: 'hello world' })
})

if (process.env.ENVIRONMENT === 'development') {
  setupController(app);
}

apiController(app);


app.listen(port, () => {
  console.log('app running on port ', port);
})
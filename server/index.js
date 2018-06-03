const path = require('path');
const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');

app.use(express.static(path.join(__dirname, './public/assets')));

app.use(morgan('dev');)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


app.get('*', function (req, res, next) {
  res.sendFile(path.join(__dirname, './path/to/your/index.html'));
});

const path = require('path');
const express = require('express');
const app = express();
const morgan = require('morgan');

app.use(express.static(path.join(__dirname, './public/assets')));

app.use(morgan('dev');)


app.get('*', function (req, res, next) {
  res.sendFile(path.join(__dirname, './path/to/your/index.html'));
});

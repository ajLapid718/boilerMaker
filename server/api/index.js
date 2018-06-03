const apiRouter = require('express').Router();

apiRouter.use('/items', require('./items.router'));

module.exports = apiRouter;

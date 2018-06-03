const apiRouter = require('express').Router();

apiRouter.use('/items', require('./items.router'));

router.use(function (req, res, next) {
  const err = new Error('Not found.');
  err.status = 404;
  next(err);
});

module.exports = apiRouter;

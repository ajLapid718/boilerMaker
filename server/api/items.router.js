const router = require('express').Router();

router.get('/', (req, res, next) => {
  res.json("Hello, world!!!");
})

module.exports = router;

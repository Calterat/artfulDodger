const router = require('express').Router();


router.use((_req, res) => {
  res.status(404).end();
})

module.exports = router;
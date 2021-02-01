const router = require('express').Router();
const dodgerRoutes = require('./dodger-routes');

router.use('/dodgers', dodgerRoutes);

module.exports = router;
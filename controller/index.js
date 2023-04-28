const router = require('express').Router();

const apiRoutes = require('./api');

const homeRoutes = require('./homeRoutes');
const followingRoutes = require('./follow');

router.use('/', followingRoutes);
router.use('/', homeRoutes);

router.use('/api', apiRoutes);

router.use((req, res) => {
  res.status(404).end();
});

module.exports = router;
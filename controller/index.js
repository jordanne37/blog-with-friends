const router = require('express').Router();

const apiRoutes = require('.');

const homeRoutes = require('../api/api/homeRoutes');
const followingRoutes = require('./followingRoute');

router.use('/', followingRoutes);
router.use('/', homeRoutes);

router.use('/api', apiRoutes);

router.use((req, res) => {
  res.status(404).end();
});

module.exports = router;
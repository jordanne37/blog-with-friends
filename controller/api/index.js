const router = require('express').Router();


const postRoutes = require('./postRoute');
const userRoutes = require('./userRoute');
const commentRoutes = require('./commentRoute');

router.use('/posts', postRoutes);
router.use('/users', userRoutes);
router.use('/comments', commentRoutes);

module.exports = router;
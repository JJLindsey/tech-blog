const router = require('express').Router();
const homeRoutes = require('./home-routes.js');
const userRoutes = require('./api/user-routes');
const postRoutes = require('./api/post-routes');
const apiRoutes = require('./api');

router.use('/api', apiRoutes);
router.use('./', homeRoutes);
router.use('/users', userRoutes);
router.use('/posts', postRoutes);

router.use((req, res) => {
    res.status(404).end();
});


module.exports = router;
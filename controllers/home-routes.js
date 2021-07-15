//user-facing routes ie homepage and login page
const router = require('express').Router();

router.get('/', (req, res) => {
    res.render('homepage');
});

module.exports = router;
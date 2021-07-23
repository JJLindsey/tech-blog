const router = require('express').Router();
const { Post, User } = require('../../models');

// get all users
router.get('/', (req, res) => {
    console.log('======================');
    Post.findAll({
        attributes: ['id', 'title', 'content', 'user_id', 'date_created', 'comments'],
        include: [
            {
                model: User,
                attributes: ['username']
            }
        ]
    })
        .then(dbPostData => res.json(dbPostData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

module.exports = router;
var express = require('express');
var router = express.Router();
var models = require('../models');

router.get('/all', function (req, res, next) {
    models.Post.findAll({
        include: ['author']
    }).then((posts) => {
        res.send(posts);
    });
});

router.post('/post', function (req, res) {

    models.Post.create({
        post_title: req.body.postTitle,
        post_ingredients: req.body.postIngredients,
        post_steps: req.body.postSteps,
        user_id: 1
    }).then(post => {
        post.getAuthor().then(author => {
            post.setDataValue('author', author);
            res.send(post);
        });
    });
});

router.get('/editPost/:id', function (req, res, next) {
    let postId = parseInt(req.params.id);
    models.Post
        .findOne({
            where: {
                id: postId
            },
            include: ['author']
        })
        .then(post => {
            res.send(post);
        })
})

router.put('/editPost/:id', (req, res) => {
    let postId = parseInt(req.params.id);
    models.Post
        .update({
            post_title: req.body.postTitle,
            post_ingredients: req.body.postIngredients,
            post_steps: req.body.postSteps
        }, {
                where: {
                    id: postId
                }
            })
        .then(result => {
            res.send();
        });
});

router.delete('/editPost/:id/delete', (req, res) => {
    let postId = parseInt(req.params.id);
    models.Post
        .destroy(
            {
                where: {
                    id: postId
                }
            })
        // .then(result => {
        //   res.send("deleted");
        // })
        .then(post => {
            res.send();
        });
});

module.exports = router;

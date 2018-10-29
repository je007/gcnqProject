var express = require('express');
var router = express.Router();
var models = require('../models');

router.get('/', function (req, res, next) {
    models.Post.findAll({
        include: ['author']
    }).then((posts) => {
        res.send(posts);
    });
});

router.post('/post', function (req, res) {
    //const userId = parseInt(req.params.id);

    models.Post.create({
        post_title: req.body.postTitle,
        post_text: req.body.postText,
        user_id: 1
    }).then(post => {
        post.getAuthor().then(author => {
            post.setDataValue('author', author);
            res.send(post);
        });
    });
});

router.get('/editPost/:id', function (req, res) {
    let postId = parseInt(req.params.id);
    models.post
        .find({
            where: {
                PostId: postId
            }
        })
        .then(post => {
            res.render('editPost', {
                PostTitle: req.body.postTitle,
                PostIngrediants: req.body.postIngrediants,
                PostBody: req.body.postBody,
                PostId: post.PostId,
                UserId: req.params.id
            })
        })
})

router.put('/editPost/:id', (req, res) => {
    let postId = parseInt(req.params.id);
    models.post
        .update({
            PostTitle: req.body.postTitle,
            PostIngrediants: req.body.postIngrediants,
            PostBody: req.body.postBody
        }, {
                where: {
                    PostId: postId
                }
            })
        .then(result => {
            res.send();
        });
});

router.delete('/editPost/:id/delete', (req, res) => {
    let postId = parseInt(re.params.id);
    models.post
        .update(
            {
                Deleted: 'true'
            },
            {
                where: {
                    PostId: postId
                }
            }
        )
        .then(post => {
            res.redirect('/post/:id')
        });
});

module.exports = router;
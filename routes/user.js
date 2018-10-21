var express = require('express');
var router = express.Router();
var models = require('../models');

router.get('/', function (req, res, next) {
    res.send('respond with a resource');
});

router.get('/post/:id', function (req, res) {
    const userId = parseInt(req.params.id);

    models.post.findOrCreate({
        where: {
            PostTitle: req.body.postTitle,
            PostIngrediants: req.body.postIngrediants,
            PostBody: req.body.postBody,
            UserId: req.params.id
        }
    }).then(post => {
        res.redirect(req.originalUrl)
    })
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
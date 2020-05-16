var express = require('express');
var router = express.Router();
let Post = require('../models/post');
let util = require('../modules/util');
let statusCode = require('../modules/statusCode');
let resMessage = require('../modules/responseMessage');
const crypto = require('crypto'); // LEVEL 2

// ================= LEVEL 3 ==================
// 모든 게시글 조회
router.get('/', function (req, res) {
    res.status(statusCode.OK)
        .send(util.success(statusCode.OK, resMessage.POSTING_SUCCESS, Post));
});

// 게시글 고유 id값을 조회
router.get('/:id', function (req, res) {
    const id = req.params.id;
    if (!id) {
        return res.status(statusCode.BAD_REQUEST)
            .send(util.fail(statusCode.BAD_REQUEST, resMessage.NULL_VALUE));
    }

    const post = Post.filter(post => post.id == id)[0];
    if (post.length == 0) {
        return res.status(statusCode.BAD_REQUEST)
            .send(util.fail(statusCode.BAD_REQUEST, resMessage.POSTING_FAIL));
    }

    const dto = {
        id: post.id,
        title: post.title,
        content: post.content,
        date: post.date,
        author: post.author
    }
    res.status(statusCode.OK)
        .send(util.success(statusCode.OK, resMessage.READ_PROFILE_SUCCESS, dto));
});

// 게시글 생성
router.post('/', async (req, res) => {
    const {
        id,
        title,
        content,
        date,
        author
    } = req.body;

    if (!id || !title || !content) {
        res.status(statusCode.BAD_REQUEST)
            .send(util.fail(statusCode.BAD_REQUEST, resMessage.NULL_VALUE));
        return;
    }

    Post.push({
        id,
        title,
        content,
        date,
        author
    });

    res.status(statusCode.OK)
        .send(util.success(statusCode.OK, resMessage.POSTING_SUCCESS, {
            postId: id,
            postTitle: title
        }));
});

// 게시글 고유 id값을 가진 게시글을 수정
router.put('/:id', async (req, res) => {
    const {
        id,
        title,
        content,
        date,
        author
    } = req.body;

    if (!id || !title || !content || !date || !author) {
        res.status(statusCode.BAD_REQUEST)
            .send(util.fail(statusCode.BAD_REQUEST, resMessage.NULL_VALUE));
        return;
    }

    // arr.findIndex(callback( element[, index[, array]] )[, thisArg])
    const idx = post.findIndex(post => post === req.params.id);

    // array.splice(start[, deleteCount[, item1[, item2[, ...]]]])
    Post.splice(idx, 5, {
        id: id,
        title: title,
        content: content,
        date: date,
        author: author
    })

    res.status(statusCode.OK)
        .send(util.success(statusCode.OK, resMessage.UPDATE_POST_SUCCESS, {
            postId: id,
            postTitle: title
        }));
})

// 게시글 고유 id값을 가진 게시글을 삭제
router.delete('/:id', function (req, res) {
    if (!id) {
        res.status(statusCode.BAD_REQUEST)
            .send(util.fail(statusCode.BAD_REQUEST, resMessage.NULL_VALUE));
        return;
    }

    const idx = post.findIndex(post => post === req.params.id);

    Post.splice(idx, 1);

    res.status(statusCode.OK)
        .send(util.success(statusCode.OK, resMessage.DELETE_POST_SUCCESS, {
            postId: id
        }));
})

module.exports = router;
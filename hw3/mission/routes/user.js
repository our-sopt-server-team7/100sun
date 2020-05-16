var express = require('express');
var router = express.Router();
let User = require('../models/user');
let util = require('../modules/util');
let statusCode = require('../modules/statusCode');
let resMessage = require('../modules/responseMessage');

/* 
    ✔️ sign up
    METHOD : POST
    URI : localhost:3000/user/signup
    REQUEST BODY : id, name, password, email
    RESPONSE STATUS : 200 (OK)
    RESPONSE DATA : User ID
*/

//    method    path        request response
router.post('/signup', async (req, res) => {
    // 1. get request data 
    const {
        id,
        name,
        password,
        email
    } = req.body;
    // 4-1. util.fail) request data check 
    if (!id || !name || !password || !email) {
        res.status(statusCode.BAD_REQUEST)
            .send(util.fail(statusCode.BAD_REQUEST, resMessage.NULL_VALUE)); // fail : return bad request 
        return;
    }
    // 4-2. util.fail) already ID
    // .filter() : Collect all elements that pass the conditions of the given array and return it as a new array
    if (User.filter(user => user.id == id).length > 0) {
        res.status(statusCode.BAD_REQUEST)
            .send(util.fail(statusCode.BAD_REQUEST, resMessage.ALREADY_ID)); // fail : return bad request 
        return;
    }
    // 2. push user to user.js
    User.push({
        id,
        name,
        password,
        email
    });
    // 3. util.success) send response data
    // status(status_code) : integer
    res.status(statusCode.OK)
        // send(json) : Communication w/ front is smooth only when "regular data" is sent      
        .send(util.success(statusCode.OK, resMessage.CREATED_USER, {
            userId: id
        }));
});

/* 
    ✔️ sign in
    METHOD : POST
    URI : localhost:3000/user/signin
    REQUEST BODY : id, name
    RESPONSE STATUS : 200 (OK)
    RESPONSE DATA : User ID
*/
router.post('/signin', async (req, res) => {
    // 1.
    const {
        id,
        password
    } = req.body;
    // 4-1.
    if (!id || !password) { // check if the request data is Null Value 
        res.status(statusCode.BAD_REQUEST)
            .send(util.fail(statusCode.BAD_REQUEST, resMessage.NULL_VALUE)); // not : null value
        return;
    }
    // 4-2.
    const user = User.filter(user => user.id == id);
    if (user.length == 0) { // check if the id exists
        res.status(statusCode.BAD_REQUEST)
            .send(util.fail(statusCode.BAD_REQUEST, resMessage.NO_USER)); // not : return no user
        return;
    }
    // 4-3.
    if (user[0].password !== password) { // check if it is same with user's pwd
        res.status(statusCode.BAD_REQUEST)
            .send(util.fail(statusCode.BAD_REQUEST, resMessage.MISS_MATCH_PW)); // not : return Miss match password 
        return;
    }
    // 3. 
    res.status(statusCode.OK) // check if success   
        .send(util.success(statusCode.OK, resMessage.LOGIN_SUCCESS, {
            userId: id // yes - return userID with login success
        }));
});

/* 
    ✔️ get profile
    METHOD : GET
    URI : localhost:3000/user/profile/:id
    RESPONSE STATUS : 200 (OK)
    RESPONSE DATA : User Id, name, email
*/
router.get('/profile/:id', async (req, res) => {
    // 1.
    const id = req.params.id;
    const user = User.filter(user => user.id == id)[0];
    // 4-1.
    if (user === undefined) {
        res.status(statusCode.BAD_REQUEST)
            .send(util.fail(statusCode.BAD_REQUEST, resMessage.NO_USER));
        return;
    }
    // 3. 성공 - login success와 함께 user Id 반환
    const dto = {
        id: user.id,
        name: user.name,
        email: user.email
    }
    res.status(statusCode.OK)
        .send(util.success(statusCode.OK, resMessage.READ_PROFILE_SUCCESS, dto));
});

module.exports = router;
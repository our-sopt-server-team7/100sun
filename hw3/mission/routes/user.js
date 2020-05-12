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
router.post('/signup', async (req, res) => {
    const {
        id,
        name,
        password,
        email
    } = req.body;
    // request data 확인 - 없다면 Bad Request 반환
    if (!id || !name || !password || !email) {
        res.status(statusCode.BAD_REQUEST)
            .send(util.fail(statusCode.BAD_REQUEST, resMessage.NULL_VALUE));
        return;
    }
    //already ID
    if (User.filter(user => user.id == id).length > 0) {
        res.status(statusCode.BAD_REQUEST)
            .send(util.fail(statusCode.BAD_REQUEST, resMessage.ALREADY_ID));
        return;
    }
    User.push({
        id,
        name,
        password,
        email
    });
    res.status(statusCode.OK)
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
    // get the data from request body
    const {
        id,
        password
    } = req.body;

    // check 4 cases : util.fail(3) or util.success(1)

    if (!id || !password) { // check if the request data is Null Value 
        res.status(statusCode.BAD_REQUEST)
            .send(util.fail(statusCode.BAD_REQUEST, resMessage.NULL_VALUE)); // not : null value
        return;
    }

    const user = User.filter(user => user.id == id); // .filter() : new array with the elements who need all the conditions
    if (user.length == 0) { // check if the id exists
        res.status(statusCode.BAD_REQUEST)
            .send(util.fail(statusCode.BAD_REQUEST, resMessage.NO_USER)); // not : return no user
        return;
    }

    if (user[0].password !== password) { // check if it is same with user's pwd
        res.status(statusCode.BAD_REQUEST)
            .send(util.fail(statusCode.BAD_REQUEST, resMessage.MISS_MATCH_PW)); // not : return Miss match password 
        return;
    }

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
    // request params 에서 데이터 가져오기
    const id = req.params.id;
    const user = User.filter(user => user.id == id)[0];
    // 존재하는 아이디인지 확인 - 없다면 No user 반환
    if (user === undefined) {
        res.status(statusCode.BAD_REQUEST)
            .send(util.fail(statusCode.BAD_REQUEST, resMessage.NO_USER));
        return;
    }
    const dto = {
        id: user.id,
        name: user.name,
        email: user.email
    }
    // 성공 - login success와 함께 user Id 반환
    res.status(statusCode.OK)
        .send(util.success(statusCode.OK, resMessage.READ_PROFILE_SUCCESS, dto));
});

module.exports = router;
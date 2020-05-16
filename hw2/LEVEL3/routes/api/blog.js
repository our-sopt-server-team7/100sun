var express = require('express');
var router = express.Router();

router.get('/post', (req, res) => { // request 'blog/'
    const result = {
        status: 200,
        message: 'posted'
    }
    res.status(200).send(result);
});

module.exports = router;
var express = require('express');
var router = express.Router();

router.get('/login', (req, res) => {
  const result = {
    status: 200,
    message: 'login success'
  }
  res.status(200).send(result);
});

router.get('/signup', (req, res) => { // request 'blog/'
  const result = {
    status: 200,
    message: 'signup success'
  }
  res.status(200).send(result);
});

module.exports = router;
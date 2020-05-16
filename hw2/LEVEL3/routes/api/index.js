// page routing (file)

var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) { // if there is 'api/' request through 'get method'
  res.render('index', {
    title: 'page routing (file)'
  });
});
router.use('/blog', require('./blog')); // router.use() : access to routes/api/blog.js
router.use('/users', require('./users')); // router.use() : access to routes/api/users.js

module.exports = router;
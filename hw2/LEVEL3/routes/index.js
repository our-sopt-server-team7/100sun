// page routing (folder)

var express = require('express'); // get 'express' module
var router = express.Router(); // get Router() middleware

router.get('/', function (req, res, next) { // if there is 'api/' request through 'get method'
  res.render('index', {
    title: 'page routing (folder)'
  });
});
router.use('/api', require('./api'));

module.exports = router; // return object 'router' as a module 
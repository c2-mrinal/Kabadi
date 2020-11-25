var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  var name="";
  res.render('index', { title: 'login1',user_name:name  });
});



router.get('/dealer', function(req, res, next) {
  
  res.render('dealer', { title: 'this is dealer' });
});

router.get('/price', function(req, res, next) {
  var name="shubham kumar";
  
  res.render('price', {title: 'login1',user_name:name  });
});
router.get('/login', function(req, res, next) {
  var name="shubham kumar";
  res.render('login', {title: 'login1',user_name:name});
});
router.get('/usershedule', function(req, res, next) {
  var name="shubham kumar";
  res.render('usershedule', {title: 'login1',user_name:name});
});



module.exports = router;

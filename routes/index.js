var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', (req, res) => {
  res.render('index', { title: 'My SaaS Dashboard Demo' });
})

module.exports = router;

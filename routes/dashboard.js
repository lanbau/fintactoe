var express = require('express')
var router = express.Router()
var stormpath = require('express-stormpath')

/* GET home page. */
router.get('/', stormpath.loginRequired, function (req, res, next) {
  // console.log(req.user)
  res.render('dashboard')
})

module.exports = router

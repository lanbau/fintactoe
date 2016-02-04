var express = require('express')
var router = express.Router()
var stormpath = require('express-stormpath')

router.get('/', stormpath.loginRequired, function (req, res, next) {
  // console.log(req.user)
  res.render('dashboard')
})

module.exports = router

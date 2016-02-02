var express = require('express')
var router = express.Router()
var stormpath = require('express-stormpath')


/* GET home page. */
router.get('/', stormpath.loginRequired, function (req, res, next) {
  // console.log(req.user)
  // or more concisely	 
  res.render('ocr')
})

module.exports = router

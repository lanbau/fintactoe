var express = require('express')
var router = express.Router()
var stormpath = require('express-stormpath')
var mongoose = require('mongoose')
var username = process.env.MONGODB_USER
var password = process.env.MONGODB_PASSWORD

mongoose.connect('mongodb://' + username + ':' + password + '@ds027819.mongolab.com:27819/playground')
var Score = mongoose.model('employee', {
  firstName: String,
  lastName: String,
  scores: Number
})

router.get('/', stormpath.loginRequired, function (req, res, next) {
  // console.log(req.user)
  res.render('dashboard')
})

router.post('/', function (req, res, next) {
  // List all documents in employee collection
  Score.find(function (err, employees) {
    if (err) return console.error(err)
    console.log(employees)
    res.send(employees)
    res.end()
  })
})

module.exports = router

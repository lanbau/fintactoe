var express = require('express')
var router = express.Router()
var stormpath = require('express-stormpath')
var Uber = require('node-uber')

router.get('/', stormpath.loginRequired, function (req, res, next) {
  res.render('glass')
})

router.post('/', function (req, res, next) {
  console.log(req.body.name.result.items[0].latitude)
  var uber = new Uber({
    client_id: process.env.UBER_CLIENT,
    client_secret: process.env.UBER_SECRET,
    server_token: process.env.UBER_TOKEN,
    name: 'fintactoe'
  })
  // console.log(req.user)
  uber.products.list({ latitude: req.body.name.result.items[0].latitude, longitude: req.body.name.result.items[0].longitude }, function (err, response) {
    if (err) console.error(err)
    else {
      var output = JSON.stringify(response, null, 2)
      res.send(output)
      res.end()
    }
  })
})

module.exports = router

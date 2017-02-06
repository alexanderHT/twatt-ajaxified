var express = require('express')
var router = express.Router()
const TweetController = require('../controllers/controller.tweet.js')

/* GET home page. */
router.get('/home', TweetController.getHome)
router.post('/status', TweetController.createStatus)

module.exports = router

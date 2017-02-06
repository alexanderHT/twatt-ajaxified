var Twitter = require('twitter')

var client = new Twitter({
  consumer_key: process.env.CUSTOMER_KEY,
  consumer_secret: process.env.CUSTOMER_SECRET,
  access_token_key: process.env.ACCESS_TOKEN,
  access_token_secret: process.env.ACCESS_TOKEN_SECRET
})

var Tweet = {
  getHome: function (req, res) {
    client.get('statuses/user_timeline', '', function (error, tweets, response) {
      if (!error) {
        res.json(tweets)
      }
    })
  },
  createStatus: function (req, res) {
    console.log(req.body.data)
    client.post('statuses/update', {status: req.body.data}, function (error, tweet, response) {
      if (error) throw error
      res.json(tweet)
    })
  }
}

module.exports = Tweet

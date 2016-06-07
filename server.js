var express = require('express'),
    path = require('path'),
    logger = require('morgan'),
    bodyParser = require('body-parser'),
    Twit = require('twit'),
    app = express();

var twitter = new Twit({
  consumer_key:         process.env.TWITTER_CONSUMER_KEY,
  consumer_secret:      process.env.TWITTER_CONSUMER_SECRET,
  access_token:         process.env.TWITTER_ACCESS_TOKEN,
  access_token_secret:  process.env.TWITTER_ACCESS_TOKEN_SECRET,
  timeout_ms:           parseInt(process.env.TWITTER_TIMEOUT),
});

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'app')));
app.use(logger('dev'));



app.get('/tweets',function(req, res){
  var lang = req.params.lang;
  var count = req.params.count;
  var keywords = '#euro2016 since:2016-06-06';
  var entities = true;
  var query = {
    q: keywords,
    count: count,
    lang: lang,
    include_entities: entities
  };
  twitter.get('search/tweets', query, function(err, data, response){
    res.json(data);
  });
});

app.listen('3000', function(){
  console.log('Server listening on 3000');
});

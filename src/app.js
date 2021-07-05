const ISDEV = true
const port = process.env.PORT || 8888;


var express = require('express'); // Express web server framework
var request = require('request'); // "Request" library
var cors = require('cors');
var querystring = require('querystring');
var cookieParser = require('cookie-parser');

var client_id = '9acdfc532ec14988a7bd53699c5b838f'; // Your client id
var client_secret = CLIENT_SECRET; // Your secret
var redirect_uri = ISDEV ? 'http://localhost:8888/callback' : 'https://audiobutler-v2lfp25hxq-uc.a.run.app'; // Your redirect uri


var stateKey = 'spotify_auth_state';

app.get('/', (req, res) => {
  res.send('Hello Word!')
})

var app = express();
app.listen(port)

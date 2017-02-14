var express = require('express');

var app = express();

var port = 80;

app.get('/', function(req,res) {
  res.send('Hello World');
});

app.get('/test', function(req,res) {
  res.send('Hello Test');
});

app.listen(port, function (err) {
  console.log('running...');
});
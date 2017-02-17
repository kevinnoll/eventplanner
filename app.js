var express = require('express');

var app = express();

app.use(express.static('public'));
app.use(express.static('src/views'));

app.get('/', function (req, res) {
    res.send('Hello World');
});

app.get('/test', function (req, res) {
    res.send('Hello Test');
});

app.listen(process.env.PORT || 5000, function (err) {
    console.log('running...');
});
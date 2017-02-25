var express = require('express');
var app = express();
var path = require('path');


//require('./node_modules/ng2f-server/expressConfig')(app);

//require('./node_modules/ng2f-server/passport')();

//require('./node_modules/ng2f-server/routes')(app);

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.use(express.static('.'));
app.use(express.static('public'));


/*app.get('/', function (req, res) {
    res.send('Hello World');
});

app.get('/test', function (req, res) {
    res.send('Hello Test');
});
*/
app.listen(process.env.PORT || 5000, function (err) {
    console.log('running...');
});
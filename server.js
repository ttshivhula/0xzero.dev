var express = require('express');
var app = express();
var path = require('path');
var port = 5656;

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.listen(port, () => {
    console.log(`Server listening at ${port}`);
});

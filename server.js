var express = require('express');

var app = express();

var port = 3232;

app.use(express.static('public'));

app.listen(port, function () {
  console.log('node express frontend up on port' + port);
});

var express = require('express');

var app = express();

app.get('/', function homepage(req, res) {
  res.sendFile(__dirname + '/app/index.html');
});

var port = process.env.PORT || 3232;
app.listen(port, function() {
  console.log('server started on port ', port);
});

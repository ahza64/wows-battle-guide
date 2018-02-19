var express = require('express');

var app = express();

app.use(express.static('public'));

app.get(['/'], function (req, res) {
  res.sendFile(__dirname + '/public/index.html');
});

app.get(['/*'], function (req, res) {
  res.redirect(req.baseUrl + '/');
});

var port = process.env.PORT || 3232;
app.listen(port, function () {
  console.log('node express frontend up on port' + port);
});

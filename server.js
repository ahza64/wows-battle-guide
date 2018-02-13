var express = require('express');

var app = express();

app.use(express.static('public'));

app.get('/asshole', function findAsshole(req, res){
     console.log("success asshole!!!!!!!!!!!!!!!");
   });

var port = process.env.PORT || 3232;
app.listen(port, function () {
  console.log('node express frontend up on port' + port);
});

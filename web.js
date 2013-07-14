var express = require('express');

var app = express.createServer(express.logger());

var filebuf = fs.readFileSync('index.html');
var filestring = filebuf.toString('utf-8');

app.get('/', function(request, response) {
  response.send(filestring);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});

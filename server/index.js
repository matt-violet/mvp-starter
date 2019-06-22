var express = require('express');
var bodyParser = require('body-parser');
var users = require('../database-mongo');

var app = express();

app.use(express.static(__dirname + '/../react-client/dist'));


app.post('/users', (req, res) => {
  console.log('req.body: ', req.body)
  users.selectAll((err, data) => {
    if (err) {
      res.sendStatus(201);
    } else {
      res.sendStatus(500);
    }
  });
});

app.listen(3000, function() {
  console.log('listening on port 3000!');
});


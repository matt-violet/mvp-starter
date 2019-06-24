var express = require('express');
var bodyParser = require('body-parser');
const {addFood, getFood} = require('../database-mongo/index.js');

var app = express();

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

app.use(express.static(__dirname + '/../react-client/dist'));


app.put('/foods', addFood);
app.get('/foods', (req, res) => {
  getFood((err, data) => {
    if (err) {
      res.sendStatus(500)
    } else {
      res.send(data)
    }
  })
});

app.listen(3000, function() {
  console.log('listening on port 3000!');
});
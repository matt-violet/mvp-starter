var express = require('express');
var bodyParser = require('body-parser');
const {addFood, getFood} = require('../database-mongo/index.js');

var app = express();

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

app.use(express.static(__dirname + '/../react-client/dist'));


app.post('/foods', addFood);
app.get('/foods', getFood);

app.listen(3000, function() {
  console.log('listening on port 3000!');
});
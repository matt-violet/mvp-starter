// mongo, show dbs, use foods
// db.foods.find({});

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/foods', { useNewUrlParser: true });

var db = mongoose.connection;

db.on('error', function() {console.log('mongoose connection error')});
db.once('open', function() {console.log('mongoose connected successfully')});

// schema
const foodSchema = mongoose.Schema({
  name: String,
  carbs: Number,
  fat: Number,
  fiber: Number,
  protein: Number
});

// model
const Food = mongoose.model('Food', foodSchema);

// seed db
var addFood = (req, res) => {
  var foodData = req.body.foodData;
  console.log('foodData.salad: ', foodData.salad)
  for (var food in foodData) {
    var newFood = new Food(foodData[food])
    Food.create(newFood, (err) => {
      if (err) {
        // res.sendStatus(500);
        console.log('error: ', err);
      } else {
        // res.sendStatus(201)
        console.log('saved to db');
      }
    });
  }
};

module.exports = {
  db,
  Food,
  addFood
};
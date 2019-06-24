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
  for (var food in foodData) {
    var newFood = new Food(foodData[food])
    Food.findByIdAndUpdate({name: newFood.name}, (err) => {
      if (err) {
        res.send(err)
      } else {
        res.json
      }
    });
  }
};

var getFood = (callback) => {
  console.log('getting food')
  Food.find({}, (err, food) => {
    if (err) {
      callback(err)
    } else {
      callback(null, food)
    }
  })
}


module.exports = {
  db,
  Food,
  addFood,
  getFood
};
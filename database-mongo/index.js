// mongo, show dbs, use foods
// db.foods.find({});

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/foods', { useNewUrlParser: true });
mongoose.connect('mongodb://localhost/users', { useNewUrlParser: true });

var db = mongoose.connection;

db.on('error', function() {console.log('mongoose connection error')});
db.once('open', function() {console.log('mongoose connected successfully')});

const foodSchema = mongoose.Schema({
  name: String,
  carbs: Number,
  fat: Number,
  fiber: Number,
  protein: Number
});

const searchSchema = mongoose.Schema({
  email: String,
  search: String
})

const Food = mongoose.model('Food', foodSchema);
const Searches = mongoose.model('Search', searchSchema);

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
  Food.find({}, (err, food) => {
    if (err) {
      callback(err)
    } else {
      callback(null, food)
    }
  })
}

var saveSearch = (req, res) => {
  var searchObj = {
    email: req.body.email,
    search: req.body.searched
  };
  var newSearch = new Searches(searchObj)
  Searches.findByIdAndUpdate(newSearch, (err) => {
    if (err) {
      res.send(err)
    } else {
      res.json
      console.log('Saved search')
    }
  })
}

module.exports = {
  db,
  Food,
  addFood,
  getFood,
  saveSearch
};
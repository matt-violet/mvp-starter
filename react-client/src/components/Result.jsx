import React from 'react';
import FoodNutrition from './FoodNutrition.jsx';
import $ from 'jquery';

class Result extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      foods: [],
      totalCarbs: 0,
      totalFat: 0,
      totalFiber: 0,
      totalProtein: 0,
      correction: 0
    }
  }

  componentDidMount() {
    $.ajax({
      type: 'GET',
      url: '/foods',
      success: (data) => {
        var foodsToAdd = {};
        for (var i = 0; i < data.length; i++) {
          if (this.props.state.foods.includes(data[i].name)) {
            foodsToAdd[data[i].name] = data[i]
          }
        }
        this.setState({
          foods: foodsToAdd,
          mounted: true
        }, () => {
          this.calculateTotals()
        })
      }
    })
  }

  calculateTotals() {
    var totalCarbs = 0;
    var totalFat = 0;
    var totalFiber = 0;
    var totalProtein = 0;
    var foods = this.props.state.foods;
    for (var i = 0; i < foods.length; i++) {
      totalCarbs += this.state.foods[foods[i]].carbs
      totalFat += this.state.foods[foods[i]].fat
      totalFiber += this.state.foods[foods[i]].fiber
      totalProtein += this.state.foods[foods[i]].protein
    }
    this.setState({
      totalCarbs: totalCarbs,
      totalFat: totalFat,
      totalFiber: totalFiber,
      totalProtein: totalProtein,
      correction: (this.props.state.currentBG - 100) * (1 / this.props.state.correctionFactor)
    });
  }

  render() {
    if (!this.state.mounted) {
      return (
        <div>
          <div>Loading nutrition info...</div>
          <br/><br/><br/>
          <a href="https://imgur.com/RendzFo"><img src="https://i.imgur.com/puqOb74.jpg" title="source: imgur.com" width="300px" /></a>
        </div>
      )
    } else if (this.state.totalFat < 20 && !this.props.state.exercise) {
      return (
        <div>
          <h4>Nutrition Information:</h4>
          <FoodNutrition state={this.props.state} />
          Total Carbs: {this.state.totalCarbs} <br/>
          Total Fat: {this.state.totalFat} <br/>
          Total Fiber: {this.state.totalFiber} <br/>
          Total Protein: {this.state.totalProtein}
          <br/><br/>
          ---------------------------------------------          
          <h4>Bolus Amount:</h4>
          Bolus = ((carbs - fiber/2 + protein/2) * insulin/carb ratio) + correction <br/>
          Bolus = (({this.state.totalCarbs} - ({this.state.totalFiber}/2) + ({this.state.totalProtein}/2)) * (1 / {this.props.state.insulinCarbRatio})) + {this.state.correction.toFixed(2)}
          <br/><br/>
          ***Bolus = {(((this.state.totalCarbs - (.5 * this.state.totalFiber) + (.5 * this.state.totalProtein)) * (1 / this.props.state.insulinCarbRatio)) + this.state.correction).toFixed(2)} units***<br/><br/>
          <br/><br/><br/>
          <a href="https://imgur.com/RendzFo"><img src="https://i.imgur.com/RendzFo.jpg" title="source: imgur.com" width="300px" /></a>
        </div>
      )   
    } else if (this.state.totalFat >= 20 && !this.props.state.exercise) {
      return (
        <div>
          <h4>Nutrition Information:</h4>
          <FoodNutrition state={this.props.state} />
          Total Carbs: {this.state.totalCarbs} <br/>
          Total Fat: {this.state.totalFat} <br/>
          Total Fiber: {this.state.totalFiber} <br/>
          Total Protein: {this.state.totalProtein}
          <br/><br/>
          ---------------------------------------------
          <h4>Bolus Amount:</h4>
          Bolus = ((carbs - fiber/2 + protein/2) * insulin/carb ratio) + correction<br/>
          Bolus = (({this.state.totalCarbs} - ({this.state.totalFiber}/2) + ({this.state.totalProtein}/2)) * (1 / {this.props.state.insulinCarbRatio})) + {this.state.correction.toFixed(2)}
          <br/><br/>
          ***Bolus = {(((this.state.totalCarbs - (.5 * this.state.totalFiber) + (.5 * this.state.totalProtein)) * (1 / this.props.state.insulinCarbRatio)) + this.state.correction).toFixed(2)} units***<br/><br/>
          *High fat content: Take 50% now, 50% over two hours
          <br/><br/><br/>
          <a href="https://imgur.com/RendzFo"><img src="https://i.imgur.com/RendzFo.jpg" title="source: imgur.com" width="300px" /></a>
        </div>
      )   
    } else if (this.state.totalFat < 20 && this.props.state.exercise) {
      return (
        <div>
          <h4>Nutrition Information:</h4>
          <FoodNutrition state={this.props.state} />
          Total Carbs: {this.state.totalCarbs} <br/>
          Total Fat: {this.state.totalFat} <br/>
          Total Fiber: {this.state.totalFiber} <br/>
          Total Protein: {this.state.totalProtein}
          <br/><br/>
          ---------------------------------------------          
          <h4>Bolus Amount:</h4>
          Bolus = ((carbs - fiber/2 + protein/2) * insulin/carb ratio) + correction <br/>
          Bolus = (({this.state.totalCarbs} - ({this.state.totalFiber}/2) + ({this.state.totalProtein}/2)) * (1 / {this.props.state.insulinCarbRatio})) + {this.state.correction.toFixed(2)}
          <br/><br/>
          ***Bolus = {(((this.state.totalCarbs - (.5 * this.state.totalFiber) + (.5 * this.state.totalProtein)) * (1 / this.props.state.insulinCarbRatio)) + this.state.correction).toFixed(2)} units***<br/>
          *Exercising soon: Consider reducing bolus depending on intensity of exercise
          <br/><br/><br/>
          <a href="https://imgur.com/RendzFo"><img src="https://i.imgur.com/RendzFo.jpg" title="source: imgur.com" width="300px" /></a>
        </div>
      )   
    } else if (this.state.totalFat >= 20 && this.props.state.exercise) {
      return (
        <div>
          <h4>Nutrition Information:</h4>
          <FoodNutrition state={this.props.state} />
          Total Carbs: {this.state.totalCarbs} <br/>
          Total Fat: {this.state.totalFat} <br/>
          Total Fiber: {this.state.totalFiber} <br/>
          Total Protein: {this.state.totalProtein}
          <br/><br/>
          ---------------------------------------------
          <h4>Bolus Amount:</h4>
          Bolus = ((carbs - fiber/2 + protein/2) * insulin/carb ratio) + correction<br/>
          Bolus = (({this.state.totalCarbs} - ({this.state.totalFiber}/2) + ({this.state.totalProtein}/2)) * (1 / {this.props.state.insulinCarbRatio})) + {this.state.correction.toFixed(2)}
          <br/><br/>
          ***Bolus = {(((this.state.totalCarbs - (.5 * this.state.totalFiber) + (.5 * this.state.totalProtein)) * (1 / this.props.state.insulinCarbRatio)) + this.state.correction).toFixed(2)} units***<br/><br/>
          *High fat content: Take 50% now, 50% over two hours<br/>
          *Exercising soon: Consider reducing bolus depending on intensity of exercise
          <br/><br/><br/>
          <a href="https://imgur.com/RendzFo"><img src="https://i.imgur.com/RendzFo.jpg" title="source: imgur.com" width="300px" /></a>
        </div>
      )   
    }
  }
}

export default Result;
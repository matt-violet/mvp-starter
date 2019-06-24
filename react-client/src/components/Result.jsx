import React from 'react';
import FoodItems from './FoodItems.jsx';
import foodData from '../../../database-mongo/data.js';
import $ from 'jquery';

class Result extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      totalCarbs: 0,
      totalFat: 0,
      totalFiber: 0,
      totalProtein: 0,
      correction: 0
    }
  }

  componentDidMount() {
    // $.ajax({
    //   type: 'GET',
    //   url: '/foods',
    //   success: (data) => {
    //     console.log('GOT DATA: ', data)
    //   }
    // })
    this.calculateTotals()
  }

  calculateTotals() {
    var totalCarbs = 0;
    var totalFat = 0;
    var totalFiber = 0;
    var totalProtein = 0;
    var foods = this.props.state.foods;
    for (var i = 0; i < foods.length; i++) {
      totalCarbs += foodData.foodData[foods[i]].carbs
      totalFat += foodData.foodData[foods[i]].fat
      totalFiber += foodData.foodData[foods[i]].fiber
      totalProtein += foodData.foodData[foods[i]].protein
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
    if (this.state.totalFat < 20) {
      return (
        <div>
          <h4>Nutrition Information:</h4>
          <FoodItems state={this.props.state} />
          Total Carbs: {this.state.totalCarbs} <br/>
          Total Fat: {this.state.totalFat} <br/>
          Total Fiber: {this.state.totalFiber} <br/>
          Total Protein: {this.state.totalProtein}
          <h4>Bolus Amount:</h4>
          {(((this.state.totalCarbs - (.5 * this.state.totalFiber) + (.5 * this.state.totalProtein)) * (1 / this.props.state.insulinCarbRatio)) + this.state.correction).toFixed(2)} u<br/><br/>
        </div>
      )   
    } else {
      return (
        <div>
          <h4>Nutrition Information:</h4>
          <FoodItems state={this.props.state} />
          Total Carbs: {this.state.totalCarbs} <br/>
          Total Fat: {this.state.totalFat} <br/>
          Total Fiber: {this.state.totalFiber} <br/>
          Total Protein: {this.state.totalProtein}
          <h4>Bolus Amount:</h4>
          {(((this.state.totalCarbs - (.5 * this.state.totalFiber) + (.5 * this.state.totalProtein)) * (1 / this.props.state.insulinCarbRatio)) + this.state.correction).toFixed(2)} u<br/><br/>     
          50% now, 50% over two hours
        </div>
      )   
    }
  }
}

export default Result;
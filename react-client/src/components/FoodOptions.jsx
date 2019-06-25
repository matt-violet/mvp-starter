import React from 'react';
import foodData from '../../../database-mongo/data.js';

class FoodOptions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      foods: []
    }
  }

  componentDidMount() {
    var foodsArr = [];
    for (var key in foodData.foodData) {
      foodsArr.push(key)
    }
    this.setState({
      foods: foodsArr
    })
  }

  render() {
    return (
      <div>
        {this.state.foods.map(food => {
          return <div key={food}><input type="checkbox" name={food} onChange={this.props.handleCheckBox} >
          </input><label>{food}</label></div>
        })}<br/><br/>
      </div>
    )
  }
}

export default FoodOptions;
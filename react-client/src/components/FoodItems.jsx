import React from 'react';

class FoodItems extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      foods: []
    }
    this.createFoodArr = this.createFoodArr.bind(this)
  }

  createFoodArr(state) {
    var foodsArr = [];
    for (var key in state) {
      if (key !== 'currentBG' && 
        key !== 'email' && 
        key !== 'exercise' && 
        key !==  'formSubmitted' && 
        key !== 'insulinCarbRatio' &&
        key !== 'loggedIn' &&
        key !== 'name' &&
        state[key] === true) {
          foodsArr.push(key)
      }
    }
    this.setState({
      foods: foodsArr
    });
  }

  componentDidMount() {
    this.createFoodArr(this.props.state);
    console.log('result.state.foods: ', this.state.foods)
    this.props.addFoodsToState(this.state.foods)
  }

  render() {
    return (
      <div>
        <ul>
        {this.state.foods.map(food => {
          return <li>{food}</li>
        })}
        </ul>
      </div>
    )
  }
}

export default FoodItems;
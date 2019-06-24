import React from 'react';
import foodData from '../../../database-mongo/data.js';

class FoodItems extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <ul>
        {this.props.state.foods.map(food => {
          return <li key={food}>{food}
            <ul>
              <li>carbs: {foodData.foodData[food].carbs}</li>
              <li>fat: {foodData.foodData[food].fat}</li>
              <li>protein: {foodData.foodData[food].protein}</li>
              <li>fiber: {foodData.foodData[food].fiber}</li>  
            </ul>
          </li>
        })}
        </ul>
      </div>
    )
  }
}

export default FoodItems;
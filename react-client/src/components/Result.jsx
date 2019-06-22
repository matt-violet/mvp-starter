import React from 'react';
import FoodItems from './FoodItems.jsx';

class Result extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h4>Nutrition Information:</h4>
        <FoodItems state={this.props.state}/>
        <h4>Bolus Amount:</h4>
      </div>
    )
  }
}

export default Result;
import React from 'react';

class FoodItems extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <ul>
        {this.props.state.foods.map(food => {
          return <li>{food}</li>
        })}
        </ul>
      </div>
    )
  }
}

export default FoodItems;
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
    // if (!this.props.state.askForServings) {
      return (
        <div>
          {this.state.foods.map(food => {
            return <div><input type="checkbox" key={food} name={food} onChange={this.props.handleCheckBox} >
            </input><label>{food}</label></div>
          })}<br/><br/>
        </div>
      )
    // } else {
    //   return (
    //     <div>
    //       {this.state.foods.map(food => {
    //         return <div><input type="checkbox" name={food} key={food} onChange={this.props.handleCheckBox} >
    //         </input><label>{food}</label><br/>ayy</div>
    //       })}<br/><br/>
    //     </div>
    //   )
    // }
  }
}

export default FoodOptions;
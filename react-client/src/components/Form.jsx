import React from 'react';
import FoodOptions from './FoodOptions.jsx';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleDropDown = this.handleDropDown.bind(this);
    this.handleCheckBox = this.handleCheckBox.bind(this);
  }

  handleChange(e) {
    this.props.handleChange(e)
  }

  handleDropDown(e) {
    this.props.handleDropDown(e)
  }

  handleCheckBox(e) {
    this.props.handleCheckBox(e)
  }

  render() {
    return (
      <div>
        <h4>Welcome, {this.props.name}!</h4>
        <p>Please provide the following information:</p>
        <form onSubmit={this.props.submitForm}>
          <label>
            Current BG: <br/>
            <input type="number" name="currentBG" onChange={this.handleChange} required /> mg/dl
          </label><br/><br/>
          <label>
            Insulin/Carb Ratio:  (1 unit : ? carbs) <br/>
            <input type="number" name="insulinCarbRatio" onChange={this.handleChange} required />
          </label><br/><br/>
          <label>
            Correction Factor (1u : ? mg/dl) <br/>
            <input type="number" name="correctionFactor" onChange={this.handleChange} required />
          </label><br/><br/>
          <label>
            Exercising soon? <br/>
            <select name="exercise" onChange={this.handleDropDown} >
              <option>No</option>
              <option>Yes</option>
            </select>
          </label><br/><br/>
          <label>
            What are you eating?
            <br/><br/>
            <FoodOptions state={this.props.state} handleCheckBox={this.handleCheckBox} />
          </label>
          <br/><br/>
          <input type="submit" value="Calculate Bolus" />
        </form>
      </div>
    )
  }
}

export default Form;
import React from 'react';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this)
    this.handleDropDown = this.handleDropDown.bind(this)
    this.handleCheckBox = this.handleCheckBox.bind(this)
  }

  handleChange(e) {
    e.preventDefault()
    this.props.handleChange(e)
  }

  handleDropDown(e) {
    e.preventDefault()
    this.props.handleDropDown(e)
  }

  handleCheckBox(e) {
    e.preventDefault()
    this.props.handleCheckBox(e)
  }

  render() {
    return (
      <div>
        <form onSubmit={this.props.handleSubmit}>
          <label>
            Current BG:
            <input type="number" name="currentBG" onChange={this.handleChange} /> mg/dl
          </label><br/><br/>
          <label>
            Insulin/Carb Ratio:  (1 unit : ? carbs) 
            <input type="number" name="insulinCarbRatio" onChange={this.handleChange} />
          </label><br/><br/>
          <label>
            Exercising sooon? 
            <select name="exercise" onChange={this.handleDropDown} >
              <option>No</option>
              <option>Yes</option>
            </select>
          </label><br/><br/>
          <label>
            What are you eating?
            <br/><br/>
            <input type="checkbox" name="salad" onChange={this.handleCheckBox} />
            <label>Salad</label>
            <br/>
            <input type="checkbox" name="hamburger" onChange={this.handleCheckBox} />
            <label>Hamburger</label>
            <br/>
            <input type="checkbox" name="pho" onChange={this.handleCheckBox} />
            <label>Pho</label>
            <br/>
            <input type="checkbox" name="eggrolls" onChange={this.handleCheckBox} />
            <label>Eggrolls</label>
            <br/>
            <input type="checkbox" name="chicken" onChange={this.handleCheckBox} />
            <label>Chicken</label>
            <br/>
            <input type="checkbox" name="potatoes" onChange={this.handleCheckBox} />
            <label>Potatoes</label>
          </label>
          <br/><br/>
          <input type="submit" value="Calculate Bolus" />
        </form>
      </div>
    )
  }
}

export default Form;
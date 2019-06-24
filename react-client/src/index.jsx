import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Login from './components/Login.jsx';
import Form from './components/Form.jsx';
import Result from './components/Result.jsx';
import foodData from '../../database-mongo/data.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      loggedIn: false,
      askForServings: false,
      exercise: false,
      salad: false,
      hamburger: false,
      pho: false,
      eggrolls: false,
      chicken: false,
      potatoes: false
    }
    this.submitLogIn = this.submitLogIn.bind(this)
    this.submitForm = this.submitForm.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleCheckBox = this.handleCheckBox.bind(this)
    this.handleDropDown = this.handleDropDown.bind(this)
    this.componentDidMount = this.componentDidMount.bind(this)
  }

  submitLogIn(e) {
    e.preventDefault()
    this.setState({
      [e.target.name]: e.target.value,
      loggedIn: true
    }) 
  }
  
  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  
  handleDropDown(e) {
    this.setState({
      [e.target.name]: true
    })
  }
  
  handleCheckBox(e) {
    this.setState({
      [e.target.name]: !this.state[e.target.name],
      askForServings: true
    })   
  }

  // seed db
  componentDidMount() {
    var foodsArr = [];
    for (var key in foodData.foodData) {
      foodsArr.push(key)
    }
    this.setState({
      foodOptions: foodsArr
    })
    $.ajax({
      type: 'PUT',
      url: '/foods',
      data: foodData,
      success: () => {
        console.log('Seeded database')
        return;
      }
    })
  }
  
  submitForm(e) {
    e.preventDefault()
    this.setState({
      [e.target.name]: e.target.value,
      formSubmitted: true,
    }) 
    var foodsArr = [];
    for (var key in this.state) {
      if (key !== 'currentBG' && 
        key !== 'email' && 
        key !== 'exercise' && 
        key !==  'formSubmitted' && 
        key !== 'insulinCarbRatio' &&
        key !== 'loggedIn' &&
        key !== 'name' &&
        key !== 'askForServings' &&
        this.state[key] === true) {
          foodsArr.push(key)
      }
    }
    this.setState({
      foods: foodsArr
    })
  }

  render () {
    if (this.state.loggedIn === false) {
      return (
        <div>
          <Login 
            handleChange={this.handleChange} 
            submitLogIn={this.submitLogIn}
          />
        </div>
      )
    } else if (this.state.loggedIn === true && this.state.foods) {
      return (
        <Result 
          state={this.state}
        />
      )
    } else {
      return (
        <Form 
          name={this.state.name}
          state={this.state}
          handleChange={this.handleChange}
          submitForm={this.submitForm}
          handleCheckBox={this.handleCheckBox}
          handleDropDown={this.handleDropDown}
        />
      )
    }
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
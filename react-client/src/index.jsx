import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Login from './components/Login.jsx';
import Form from './components/Form.jsx';
import Result from './components/Result.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      loggedIn: false,
      exercise: false,
      salad: false,
      hamburger: false,
      pho: false,
      eggrolls: false,
      potatoes: false
    }
    this.submitLogIn = this.submitLogIn.bind(this)
    this.submitForm = this.submitForm.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleCheckBox = this.handleCheckBox.bind(this)
    this.handleDropDown = this.handleDropDown.bind(this)
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
      [e.target.name]: !this.state[e.target.name]
    })   
  }
  
  submitForm(e) {
    e.preventDefault()
    this.setState({
      [e.target.name]: e.target.value,
      formSubmitted: true
    }) 
    var that = this;
    $.ajax({
      type: 'POST',
      url: '/users',
      data: that.state,
      success: (data) => {
        console.log('POST successful')
      },
      error: (err) => {
        console.log('Error')
      }
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
    } else if (this.state.loggedIn === true && this.state.formSubmitted === true) {
      return (
        <Result 
          state={this.state}
        />
      )
    } else {
      return (
        <Form 
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
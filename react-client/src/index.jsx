import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Login from './components/Login.jsx';
import Form from './components/Form.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      submitted: false,
      exercise: false,
      salad: false,
      hamburger: false,
      pho: false,
      eggrolls: false,
      potatoes: false
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleCheckBox = this.handleCheckBox.bind(this)
    this.handleDropDown = this.handleDropDown.bind(this)
  }

  // componentDidMount() {
  //   $.ajax({
  //     url: '/items', 
  //     success: (data) => {
  //       this.setState({
  //         items: data
  //       })
  //     },
  //     error: (err) => {
  //       console.log('err', err);
  //     }
  //   });
  // }

  handleSubmit(e) {
    e.preventDefault()
    this.setState({
      [e.target.name]: e.target.value,
      submitted: true
    }) 
  }

  handleChange(e) {
    e.preventDefault()
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleDropDown(e) {
    e.preventDefault()
    this.setState({
      [e.target.name]: true
    })
  }

  handleCheckBox(e) {
    this.setState({
      [e.target.name]: true
    })   
  }

  render () {
    if (this.state.submitted === false) {
      return (
        <div>
          <Login 
            handleChange={this.handleChange} 
            handleSubmit={this.handleSubmit}
          />
        </div>
      )
    } else {
      return (
        <Form 
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          handleCheckBox={this.handleCheckBox}
          handleDropDown={this.handleDropDown}
        />
      )
    }
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
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
      name: '',
      email: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
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
        <Form />
      )
    }
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Login from './components/Login.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      name: '',
      email: ''
    }
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

  render () {
    if (this.state.name === '' && this.state.email === '') {
      return (
        <div>
          <Login 
            name={this.state.name} 
            email={this.state.email} 
            handleChange={this.handleChange} 
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
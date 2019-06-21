import React from 'react';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      name: '',
      email: ''
    }
    this.handleChange = this.handleChange.bind(this)
  }
  
  handleSubmit(e) {
    e.preventDefault()
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleChange(e) {
    e.preventDefault()
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  
  render () {
    return (
      <div>
        <form>
          <label>
            Name:
            <input type="text" name="name" onChange={this.handleChange} />
          </label><br/>
          <label>
            Email:
            <input type="email" name="email" onChange={this.handleChange} />
          </label><br/><br/>
          <input type="Submit" value="Login" />
        </form>
      </div>
    );
  }
}

export default Login;
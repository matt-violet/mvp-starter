import React from 'react';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this)
  }
  
  handleChange(e) {
    e.preventDefault()
    this.props.handleChange(e)
  }

  render () {
    return (
      <div>
        <h4>Log in:</h4>
        <form onSubmit={this.props.submitLogIn} >
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
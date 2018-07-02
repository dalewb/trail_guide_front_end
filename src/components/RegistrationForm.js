import React, { Component } from 'react';

class RegistrationForm extends Component {
  constructor() {
    super()

    this.state = {
      username: '',
      userType: '',
      gender: '',
      password: '',
      confirmPassword: '',
    }
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    }, () => {console.log(this.state)})
  }

  render() {
    return (
      <div>
        <form onSubmit={this.props.handleRegistrationSubmit}><br />
          <label>
            Username:
            <input type="text" name="username" onChange={this.handleChange}/>
          </label><br />
          <label>
            User Type:
            <input type="text" name="userType" onChange={this.handleChange}/>
          </label><br />
          <label>
            Gender
            <input type="text" name="gender" onChange={this.handleChange}/>
          </label><br />
          <label>
            Password:
            <input type="password" name="password" onChange={this.handleChange}/>
          </label><br />
          <label>
            Confirm Password:
            <input type="password" name="confirmPassword" onChange={this.handleChange}/>
          </label><br />
          <button type="submit" value="Submit">Submit</button>
        </form>
      </div>
    )
  }
}

export default RegistrationForm;

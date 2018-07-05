import React, { Component } from 'react';

class RegistrationForm extends Component {
  constructor() {
    super()

    this.state = {
      username: '',
      userType: '',
      gender: '',
      startDate: '',
      password: '',
      confirmPassword: '',
      currentuserId: '',
    }
  }

  createUser = () => {
    fetch('http://localhost:3000/api/v1/users/', {
  		method: "POST",
  		headers: {
  			"Content-Type": "application/json"
  		},
  		body: JSON.stringify({
        user_type: this.state.userType,
        username: this.state.username,
        gender: this.state.gender,
        start_date: this.state.startDate,
        priority: this.state.requestPriority
  		})
    })
      .then(res => res.json())
      .then(json => {this.setState({
        currentUserId: json.data.id
      })})
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    }, () => {console.log(this.state)})
  }

  handleRegistrationSubmit = (e) => {
    e.preventDefault()
    this.createUser()
  }

  render() {
    return (
      <div>
        <h3>Register!</h3>
        <form onSubmit={this.handleRegistrationSubmit}><br />
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
            Start Date
            <input type="text" name="startDate" onChange={this.handleChange}/>
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

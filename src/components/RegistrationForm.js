import React, { Component } from 'react';
import { Form, Button, Card } from 'semantic-ui-react';

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
    })
  }

  handleRegistrationSubmit = (e) => {
    e.preventDefault()
    this.createUser()
  }

  render() {
    return (
      <Card.Group centered>
      <Form onSubmit={this.handleRegistrationSubmit}>
          <Form.Field>
            <input type="text" name="username" label="Username" placeholder="Username" onChange={this.handleChange}/>
          </Form.Field>
          <Form.Field>
            <input type="text" name="userType" label="User Type" placeholder="User Type" onChange={this.handleChange}/>
          </Form.Field>
          <Form.Field>
            <input type="text" name="gender" label="Gender" placeholder="Gender" onChange={this.handleChange}/>
          </Form.Field>
          <Form.Field>
            <input type="text" name="startDate" label="Start Date" placeholder="Start Date" onChange={this.handleChange}/>
          </Form.Field>
          <Form.Field>
            <input type="password" name="password" label="Password" placeholder="Password" onChange={this.handleChange}/>
          </Form.Field>
          <Form.Field>
            <input type="password" name="confirmPassword" label="Confirm Password" placeholder="Confirm Password" onChange={this.handleChange}/>
          </Form.Field>
        <Button type="submit" value="Submit">Submit</Button>
      </Form>
      </Card.Group>
    )
  }
}

export default RegistrationForm;

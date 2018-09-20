import React, { Component } from 'react';
import { Form, Button, Card } from 'semantic-ui-react';

class loginForm extends Component {
  constructor() {
    super()

    this.state = {
      username: '',
      password: '',
    }
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.findUser(this.state)
  }

  render() {
    return (
      <Card.Group centered>
        <Form onSubmit={this.handleSubmit}>
          <Form.Field>
            <input type='text' name='username' label="Username" placeholder="Username" onChange={this.handleChange}/>
          </Form.Field>
          <Form.Field>
            <input type='password' name='password' label="Password" placeholder="Password" onChange={this.handleChange}/>
          </Form.Field>
          <Form.Field>
            <Button type='submit'>Submit</Button>
          </Form.Field>
        </Form>
      </Card.Group>
    )
  }
}

export default loginForm

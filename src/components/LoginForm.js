import React, { Component } from 'react'

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
    }, () => {console.log(this.state)})
  }

  handleSubmit = (e) => {
    e.preventDefault()
    console.log(this.state)
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        Username
        <input type='text' name='username' onChange={this.handleChange}/>
        Password
        <input type='password' name='password' onChange={this.handleChange}/>
        <input type='submit' />
      </form>
    )
  }
}

export default loginForm

import React, { Component } from 'react';
import LoginForm from '../components/LoginForm'
import { connect } from 'react-redux'

class LoginContainer extends Component {
  state = {
    allUsernames: [],
    userInfo: '',
  }

  componentDidMount() {
    fetch(`http://localhost:3000/api/v1/users`)
      .then(res => res.json())
      .then(json => this.setState({
        allUsernames: json
      }))
  }

  findUser = (info) => {

  }

  render() {
    return (
      <LoginForm />
    )
  }
}

function mapStateToProps(state) {
  debugger
  return {
    user: '',
  }
}

export default connect(mapStateToProps)(LoginContainer);

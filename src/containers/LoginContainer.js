import React, { Component } from 'react';
import LoginForm from '../components/LoginForm'
import { connect } from 'react-redux'

class LoginContainer extends Component {
  state = {
    allUsernames: [],
    allUsers: [],
    userInfo: '',
  }

  componentDidMount() {
    fetch(`http://localhost:3000/api/v1/users`)
      .then(res => res.json())
      .then(json => this.setState({
        allUsers: json.data
      },() => console.log("users state",this.state)))
  }

  findUser = (info) => {
    console.log(this.state);
    let user = this.state.allUsers.find(user => user.username.toLowerCase() === info.username.toLowerCase())
    if (user) {
      console.log("In findUser, props are: ", this.props)
      this.props.setUser(user)
    }
  }

  render() {
    return (
      <LoginForm findUser={this.findUser}/>
    )
  }
}

function mapStateToProps(state) {
  return {
    user: '',
  }
}

function mapDispatchToProps(dispatch) {
  return {
    setUser: (user) => {
      dispatch({
        type: "SET_USER",
        payload: { user }
      })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);

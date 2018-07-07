import React, { Component } from 'react';
import { connect } from 'react-redux';

class HomeContainer extends Component {

  componentDidMount() {
    this.renderUserBookings()
    this.renderUserPosts()
  }

  renderUserBookings = () => {

  }

  renderUserPosts = () => {

  }

  render() {
    return (
      <h1>HOMEEEEEEE!!!!!!!!</h1>
    )
  }
}

export default connect()(HomeContainer);

import React, { Component } from 'react';
import { connect } from 'react-redux';
import MyLocation from '../components/MyLocation'

class MyLocationContainer extends Component {

  render() {
    return (
      <p>My Location Container</p>
    )
  }
}

function mapStateToProps(state) {
  return {
    myLocations: state.bookingReducer.userLocations
  }
}

export default connect(mapStateToProps)(MyLocationContainer);

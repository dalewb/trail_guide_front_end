import React , { Component } from 'react';
import { connect } from "react-redux";
import { fetchBookings } from '../reduxComponents/bookingActions'

class LocationToPost extends Component {
  state = {
    myLocations: '',
  }

  componentDidMount() {
    this.getUserLocations()
  }

  getUserLocations() {
    fetch("http://localhost:3000/api/v1/1/bookings")
    .then(res => res.json())
    .then(json => this.setState({
      myLocations: json.data
    }, () => {console.log(json)}))
  }

  renderLocations = () => {

  }

  render() {
    return (
      <p>Location To Post</p>
    )
  }
};

function mapStateToProps(state) {
  console.log("LocationToPost, mapStateToProps, state is: ", state);
  return {
    myLocations: "",
  }
}

function mapDispatchToProps() {
  return {

  }
}

export default connect()(LocationToPost);

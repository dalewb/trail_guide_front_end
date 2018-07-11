import React , { Component } from 'react';
import { connect } from "react-redux";
import { fetchBookings } from '../reduxComponents/bookingActions';
import { Card, Grid, Button } from 'semantic-ui-react';

class LocationToPost extends Component {
  state = {
    myLocations: null,
    postId: this.props.postId,
  }

  componentDidMount() {
    this.getUserLocations()
  }

  addLocationToPost = (location_id) => {
    fetch(`http://localhost:3000/api/v1/posts/${this.state.postId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        "location_id": location_id
      })
    })
      .then(res => res.json())
      .then(json => console.log("Return from post PATCH, json is: ", json))
      .then(this.setState({
        myLocations: null,
      }))
      .then(console.log("addLocationToProps in LocationToPost, props are: ",this.props))
  }

  getUserLocations() {
    fetch("http://localhost:3000/api/v1/1/bookings")
    .then(res => res.json())
    .then(json => this.setState({
      myLocations: json.data
    }, () => {console.log("get user locations, json is: ",json)}))
  }
  renderLocation = (location) => {
    return (
      <Card>
        <Card.Content>
          <Card.Header>{location.name}</Card.Header>
          <Card.Meta>Arrival Date: {location.date}</Card.Meta>
          <Card.Meta>Arrival Time: {location.time}</Card.Meta>
        </Card.Content>
        <Button onClick={() => this.addLocationToPost(location.id)}>Add Location</Button>
      </Card>
    )
  }

  renderLocations = () => {
    if (this.state.myLocations) {
      return (
        <Grid padded columns={4}>
          {this.state.myLocations.map(location => this.renderLocation(location))}
        </Grid>
    )
    } else {
      return null
    }
  }

  render() {
    return (
      this.state.myLocations ? this.renderLocations() : null
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

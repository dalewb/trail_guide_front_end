import React, { Component } from 'react';
import LocationByTown from '../components/LocationByTown';
import Location from '../components/Location';
import MyLocation from '../components/MyLocation';
import { connect } from 'react-redux';
import { Form, Card, Button, Grid } from 'semantic-ui-react';

class LocationContainer extends Component {
  constructor(props) {
    super(props)

    this.state = {
      locations: [],
      myLocations: [],
      date: '',
      time: '',
      newLocationId: '',
      myLocationForm: false,
      toggleMyLocations: false,
      locationButtonText: 'Show'
    }
  }

  getUserLocations() {
    fetch("http://localhost:3000/api/v1/1/bookings")
    .then(res => res.json())
    .then(json => this.setState({
      myLocations: json.data
    }, () => {console.log(json)}))
  }

  handleLocationClick = (location) => {
    const name = location.name
    const lat = location.lat
    const lon = location.lon
    const description = location.activities[0].description
    fetch("http://localhost:3000/api/v1/locations", {
  		method: "POST",
  		headers: {
  			"Content-Type": "application/json"
  		},
  		body: JSON.stringify({
        name: name,
        latitude: lat,
        longitude: lon,
        description: description,
  		})
  	})
  		.then(res => res.json())
  		.then(json => {this.setState({
        newLocationId: json.data.id,
        myLocationForm: true,
      })
    })
  }

  handleDeleteLocationClick = (e) => {
    fetch(`http://localhost:3000/api/v1/bookings/${e.id}`, {
  		method: "DELETE",
  		headers: {
  			"Content-Type": "application/json"
  		}
  	})
  		.then(res => res.json())
      .then(json => this.getUserLocations)
  }

  handleMyLocationsClick = () => {
    if (this.state.toggleMyLocations === true) {
      this.getUserLocations()
      this.setState({
        toggleMyLocations: !this.state.toggleMyLocations,
        locationButtonText: 'Show'
      })
    } else {
      this.setState({
        toggleMyLocations: !this.state.toggleMyLocations,
        locationButtonText: 'Hide'
      })
    }
  }

  handleMyLocationFormSubmit = (e) => {
    console.log("Inside my location form submit", this.state)
    e.preventDefault()
    fetch('http://localhost:3000/api/v1/bookings', {
      method: 'POST',
      headers: {
  			"Content-Type": "application/json"
  		},
      body: JSON.stringify({
        user_id: 1,
        location_id: this.state.newLocationId,
        date: this.state.date,
        time: this.state.time,
  		})
    })
      .then(res => res.json())
      .then(json => this.setState({
        myLocationForm: false
      }, () => this.getUserLocations()))
  }

  handleMyLocationFormChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  renderLocations = () => {
    console.log("inside render locations",this.props);
    return this.props.userLocations.map(location => {
      return (
        <Location
          info={location}
          key={location.unique_id}
          handleLocationClick={this.handleLocationClick}
        />
      )
    })
  }

  renderMyLocations = () => {
    return this.state.myLocations.map(location => {
      return (
        <MyLocation
          info={location}
          key={location.id}
          userId="1"
          id={location.id}
          handleDeleteLocationClick={this.handleDeleteLocationClick}
        />
      )
    })
  }

  renderMyLocationForm = () => {
    return(
      <Form onSubmit={this.handleMyLocationFormSubmit}>
        <label>
          Estimated Arrival Date
          <input type="text" name="date" onChange={this.handleMyLocationFormChange}></input>
        </label>
        <label>
          Estimated Arrival Time
          <input type="text" name="time" onChange={this.handleMyLocationFormChange}></input>
        </label>
        <input type="submit" value="Submit" />
      </Form>
    )
  }

  addToLocations = (locations) => {
    this.setState({
      locations: locations
    })
  }

  render() {
    return (
      <div>
        <LocationByTown
          renderLocations={this.renderLocations}
        /><br />
      <Button onClick={this.handleMyLocationsClick}>{this.state.locationButtonText} My Locations</Button>
        {this.state.myLocationForm ? this.renderMyLocationForm() : null}
        <Grid padded columns={4}>
          {(this.state.myLocations || this.state.myLocations.length > 1) && this.state.toggleMyLocations ? this.renderMyLocations() : null}
        </Grid>
        {this.props.userLocations ? this.renderLocations() : null}
      </div>
    )
  }
}

function mapStateToProps(state) {
  console.log("In mapStateToProps in LocationContainer, state.bookingReducer.userLocations is: ", state.bookingReducer.userLocations );
  return {
    userLocations: state.bookingReducer.userLocations,
    loading: state.loading,
    error: state.error,
    renderLocations: false,
  }
}

export default connect(mapStateToProps)(LocationContainer);

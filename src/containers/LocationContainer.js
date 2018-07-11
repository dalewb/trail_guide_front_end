import React, { Component } from 'react';
import LocationByTown from '../components/LocationByTown';
import Location from '../components/Location';
import MyLocation from '../components/MyLocation';
import { fetchUserBookings } from '../reduxComponents/bookingActions'
import { connect } from 'react-redux';
import { Form, Card, Button, Grid } from 'semantic-ui-react';

class LocationContainer extends Component {
  constructor(props) {
    super(props)

    this.state = {
      locations: [],
      userLocations: [],
      date: '',
      time: '',
      newLocationId: '',
      myLocationForm: false,
      toggleMyLocations: false,
      toggleLocations: true,
      locationButtonText: 'Show',
      toggleLocationByTown: true,
    }
  }

  toggleMyLocations = () => {
    this.setState({
      toggleMyLocations: !this.state.toggleMyLocations,
    })
  }

  toggleLocations = () => {
    this.setState({
      toggleLocations: !this.state.toggleLocations,
    })
  }

  toggleLocationByTown = () => {
    this.setState({
      toggleLocationByTown: !this.state.toggleLocationByTown,
    })
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
        toggleLocations: !this.state.toggleLocations,
        toggleLocationByTown: !this.state.toggleLocationByTown,
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
      .then(json => this.props.fetchUserBookings())
  }

  handleMyLocationsClick = () => {
    console.log("handleMyLocationsClick in LocationsContainer, this.props are: ", this.props );
    this.setState({
      toggleMyLocations: !this.state.toggleMyLocations,
    })
    if (this.state.toggleMyLocations === true) {
      this.toggleMyLocations()
    } else {
      this.props.fetchUserBookings()
      this.toggleMyLocations()
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
        myLocationForm: false,
        date: '',
        time: '',
        toggleLocations: !this.state.toggleLocations,
        toggleLocationByTown: true,
      }, () => this.props.fetchUserBookings()))
  }

  handleMyLocationFormChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  renderLocations = () => {
    console.log("inside render locations",this.props);
    return this.props.allLocations.map(location => {
      return (
        <Location
          info={location}
          key={location.unique_id}
          handleLocationClick={this.handleLocationClick}
        />
      )
    })
  }

  renderLocationByTown = () => {
    return (
      <LocationByTown
        renderLocations={this.renderLocations}
      />
    )
  }

  renderMyLocations = () => {
    return (
    this.props.userBookings.map(location => {
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
    )
  }

  renderMyLocationForm = () => {
    return (
      <Card.Group centered>
        <Form onSubmit={this.handleMyLocationFormSubmit}>
          <Form.Field>
            <input type="text" name="date" label="Estimated Arrival Date" placeholder="Estimated Arrival Date" onChange={this.handleMyLocationFormChange}></input>
          </Form.Field>
          <Form.Field>
            <input type="text" name="time" label="Estimated Arrival Time" placeholder="Estimated Arrival Time" onChange={this.handleMyLocationFormChange}></input>
          </Form.Field>
          <Form.Field>
            <Button type="submit" value="Submit">Submit</Button>
          </Form.Field>
        </Form>
      </Card.Group>
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
        {this.state.toggleLocationByTown ? this.renderLocationByTown() : null}
        <br />
      <Button onClick={this.handleMyLocationsClick}>Toggle My Locations</Button>
        <p></p>
        <p></p>
        {this.state.myLocationForm ? this.renderMyLocationForm() : null}
        <Grid padded columns={4}>
          {this.props.userBookings.length > 0 && this.state.toggleMyLocations ? this.renderMyLocations() : null}
        </Grid>
        {this.props.allLocations && this.state.toggleLocations ? this.renderLocations() : null}
      </div>
    )
  }
}

function mapStateToProps(state) {
  console.log("In mapStateToProps in LocationContainer, state.bookingReducer.userLocations is: ", state.bookingReducer.userLocations );
  return {
    allLocations: state.bookingReducer.allLocations,
    userBookings: state.bookingReducer.userBookings,
    loading: state.loading,
    error: state.error,
    renderLocations: false,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    fetchUserBookings: () => dispatch(fetchUserBookings()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LocationContainer);

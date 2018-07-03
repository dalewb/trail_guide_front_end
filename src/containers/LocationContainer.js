import React, { Component } from 'react';
import LocationByTown from '../components/LocationByTown';
import Location from '../components/Location';
import MyLocation from '../components/MyLocation';

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
    }
  }

  getUserLocations() {
    fetch("http://localhost:3000/api/v1/bookings/locations/1")
    .then(res => res.json())
    .then(json => this.setState({
      myLocations: json.data
    }, () => {console.log(this.state)}))
  }

  renderMyLocations = () => {
    return this.state.myLocations.map(location => {
      return (
        <MyLocation
          info={location}
          key={location.id}
          userId="1"
        />
      )
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
      })
    })
  }

  handleMyLocationsClick = () => {
    this.setState({
      myLocationForm: !this.state.myLocationForm,
    })
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
    return this.state.locations.map(location => {
      return (
        <Location
          info={location}
          key={location.unique_id}
          handleLocationClick={this.handleLocationClick}
        />
      )
    })
  }

  renderMyLocationForm = () => {
    return(
      <form onSubmit={this.handleMyLocationFormSubmit}>
        <label>
          Estimated Arrival Date
          <input type="text" name="date" onChange={this.handleMyLocationFormChange}></input>
        </label>
        <label>
          Estimated Arrival Time
          <input type="text" name="time" onChange={this.handleMyLocationFormChange}></input>
        </label>
        <input type="submit" value="Submit" />
      </form>
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
          addToLocations={this.addToLocations}
        /><br />
        <button onClick={this.handleMyLocationsClick}>See My Locations</button>
        {this.state.myLocationForm ? this.renderMyLocationForm() : null}
        {this.state.myLocations || this.state.myLocations.length > 1 ? this.renderMyLocations() : null}
        {this.state.locations.length > 0 ? this.renderLocations() : null}
      </div>
    )
  }
}

export default LocationContainer;

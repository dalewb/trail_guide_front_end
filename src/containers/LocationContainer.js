import React, { Component } from 'react';
import LocationByTown from '../components/LocationByTown';
import Location from '../components/Location';

class LocationContainer extends Component {
  constructor() {
    super()

    this.state = {
      locations: [],
    }
  }

  renderLocations = () => {
    return this.locations.map(location => {
      return (
        <Location location={location}/>
      )
    })
  }

  addToLocations = (locations) => {
    this.setState({
      locations
    })
  }

  render() {
    return (
      <div>
        <LocationByTown addToLocations={this.addToLocations}/>
        {this.state.locations.length > 0 ? this.renderLocations() : null}
      </div>
    )
  }
}

export default LocationContainer;

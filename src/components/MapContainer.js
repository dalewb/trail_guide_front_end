import React, { Component } from 'react';
import {Map, Marker, GoogleApiWrapper} from 'google-maps-react';

let options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0
};

class MapContainer extends Component {
  state = {
    lon: '',
    lat: '',
    errorMsg: '',
    center: {
      clat: '',
      clon: ''
    },
    zoom: 3,
  }

  componentDidMount() {
    this.currentPosition()
  }

  setCurrentPositionSuccess = (latitude, longitude) => {
    this.setState({
      center: {
        clat: latitude,
        clon: longitude
      }
    }, () => {console.log(this.state);})
  }

  setCurrentPositionError = (error) => {
    this.setState({
      errorMsg: error
    })
  }

  static defaultProps = {
    center: {
      lat: 40.705260,
      lng: -74.013907
    },
    zoom: 13
  };

  success = (pos) => {
    let crd = pos.coords;
    this.setCurrentPositionSuccess(crd.latitude, crd.longitude)
    return {
      lat: crd.latitude,
      lon: crd.longitude,
    }
  }

  error = (err) => {
    this.setCurrentPositionError(`ERROR(${err.code}): ${err.message}`);
  }

  currentPosition() {
    return navigator.geolocation.getCurrentPosition(this.success, this.error, options);
  }

  render() {
    return (
      // Important! Always set the container height explicitly
      <Map
        google={this.props.google}
        center={this.currentPosition()}
        zoom={14}
      >
        <Marker onClick={this.onMarkerClick}
                name={'Current location'} />


      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: ("AIzaSyCJWxC8L5mK9wrlkILVrNP3RmDT2yEXi6Y")
})(MapContainer)

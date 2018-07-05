import React, { Component } from 'react';
import {GoogleMapReact, Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

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
    this.CurrentPosition()
  }

  setCurrentPositionSuccess = (latitude, longitude) => {
    this.setState({
      center: {
        clat: latitude,
        clon: longitude
      }
    })
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
  }

  error = (err) => {
    this.setCurrentPositionError(`ERROR(${err.code}): ${err.message}`);
  }

  CurrentPosition() {
    return navigator.geolocation.getCurrentPosition(this.success, this.error, options);
  }

  render() {
    return (
      // Important! Always set the container height explicitly
      <Map google={this.props.google} zoom={14}>

        <Marker onClick={this.onMarkerClick}
                name={'Current location'} />

        <InfoWindow onClose={this.onInfoWindowClose}>

        </InfoWindow>
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: ("AIzaSyCJWxC8L5mK9wrlkILVrNP3RmDT2yEXi6Y")
})(MapContainer)

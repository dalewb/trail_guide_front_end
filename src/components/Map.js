import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class Map extends Component {
  state = {
    lon: '',
    lat: '',
  }

  // logPosition = (position) => {
  //   this.setState({
  //     lat: position.coords.latitude,
  //     lon: position.coords.longitude
  //   }, () => {console.log("Latitude: " + position.coords.latitude + ", Longitude: " + position.coords.longitude)})
  // }
  //
  // showError = (error) => {
  //     switch (error.code) {
  //         case error.PERMISSION_DENIED:
  //             alert("User denied the request for Geolocation.")
  //             break;
  //         case error.POSITION_UNAVAILABLE:
  //             alert("Location information is unavailable.")
  //             break;
  //         case error.TIMEOUT:
  //             alert("The request to get user location timed out.")
  //             break;
  //         case error.UNKNOWN_ERR:
  //             alert("An unknown error occurred.")
  //             break;
  //     }
  // }
  //
  // if (navigator.geolocationllll) {
  //     navigator.geolocation.getCurrentPosition(logPosition)
  // } else {
  //     console.log("Geolocation API isn't supported.")
  // }


  static defaultProps = {
    center: {
      lat: 40.7051169,
      lng: -74.0142273
    },
    zoom: 11
  };

  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '100vh', width: '100vw' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyCJWxC8L5mK9wrlkILVrNP3RmDT2yEXi6Y" }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={40.7051169}
            lng={-74.0142273}
          />
        </GoogleMapReact>
      </div>
    );
  }
}

export default Map;

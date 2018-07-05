import React, { Component } from 'react';

let options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0
};

let success = (pos) => {
  let crd = pos.coords;
  debugger

  props.setCurrentPositionSuccess(crd.latitude, crd.longitude)

}

let error = (err) => {
  props.setCurrentPositionError(`ERROR(${err.code}): ${err.message}`);
}

function CurrentPosition() {

  return navigator.geolocation.getCurrentPosition(success, error, options);

}

export default CurrentPosition;

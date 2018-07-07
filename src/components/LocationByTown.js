import React, { Component } from 'react';
import { connect } from 'react-redux';

class LocationByTown extends Component {
  constructor(props) {
    super(props)

    this.state = {
      city: '',
      state: '',
    }
  }

  capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    let searchCity = this.state.city.split(' ').map(string => this.capitalizeFirstLetter(string)).join('+')
    let searchState = this.state.state.split(' ').map(string => this.capitalizeFirstLetter(string)).join('+')
    fetch(`https://trailapi-trailapi.p.mashape.com/?limit=25&q[activities_activity_type_name_eq]=hiking&q[city_cont]=${searchCity}&q[state_cont]=${searchState}&radius=25`, {
      method: 'get',
      headers: {
        'X-Mashape-Key': 'x78qgG0HjVmshFnNVySkv4C0uBffp1B5UsfjsnDU67H0VVAOmg',
        'Accept': 'application/json'
      },
    })
      .then(res => res.json())
      .then(json => {this.props.addToLocations(json.places)})
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h3>Find a Location!</h3>
        <label>
          City:
          <input type="text" name="city" onChange={this.handleChange}></input>
        </label>
        <label>
          State:
          <input type="text" name="state" onChange={this.handleChange}></input>
        </label>
        <input type="submit" value="Submit"></input>
      </form>
    )
  }
}

export default connect()(LocationByTown);

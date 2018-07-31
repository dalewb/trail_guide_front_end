import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchBookings, fetchUserBookings } from '../reduxComponents/bookingActions';
import { Form, Button, Card } from 'semantic-ui-react';

class LocationByTown extends Component {
    state = {
      city: '',
      state: '',
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
    console.log("Inside location search submit, props are: ", this.props);
    this.props.fetchBookings(searchCity, searchState)
    .then(res => this.props.renderLocations())
    .then()
  }

  render() {
    return (
      <Card.Group centered>
        <Form onSubmit={this.handleSubmit}>
          <Form.Field>
            <input type="text" name="city" label="City" placeholder="City" onChange={this.handleChange}></input>
          </Form.Field>
          <Form.Field>
            <input type="text" name="state" label="State" placeholder="State" onChange={this.handleChange}></input>
          </Form.Field>
          <Form.Field>
            <Button type="submit" value="Submit">Submit</Button>
          </Form.Field>
        </Form>
      </Card.Group>
    )
  }
}

function mapStateToProps(state) {
  return {
    userLocations: state.bookingReducer.userLocations,
    userBookings: state.bookingReducer.userBookings,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    fetchBookings: (city, state) => dispatch(fetchBookings(city, state)),
    fetchUserBookings: () => dispatch(fetchUserBookings())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LocationByTown);

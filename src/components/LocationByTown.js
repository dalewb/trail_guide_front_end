import React, { Component } from 'react';
import { connect } from 'react-redux';
import {fetchBookings} from '../reduxComponents/bookingActions';
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
    this.props.dispatch(fetchBookings(searchCity, searchState))
    .then(res => this.props.renderLocations())
  }

  render() {
    return (
      <Card.Group centered>
        <Form onSubmit={this.handleSubmit}>
          <h3>Find a Location!</h3>
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
  debugger
}

export default connect()(LocationByTown);

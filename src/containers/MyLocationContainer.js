import React, { Component } from 'react';
import { connect } from 'react-redux';
import MyLocation from '../components/MyLocation'
import { fetchUserBookings } from '../reduxComponents/bookingActions'
import { Grid } from 'semantic-ui-react'

class MyLocationContainer extends Component {

  renderMyLocations = () => {
    return this.props.userBookings.map(location => {
      return (
        <Grid.Column>
          <MyLocation
            info={location}
            key={location.id}
            user={this.props.user}
            id={location.id}
            handleDeleteLocationClick={this.handleDeleteLocationClick}
          />
        </Grid.Column>
        )
    })
  }

  render() {
    return (
      <Grid padded columns={4}>
        {this.renderMyLocations()}
      </Grid>
    )
  }
}

function mapStateToProps(state) {
  return {
    userBookings: state.bookingReducer.userBookings,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    fetchUserBookings: () => dispatch(fetchUserBookings())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MyLocationContainer);

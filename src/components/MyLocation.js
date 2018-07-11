import React from 'react';
import { fetchUserPosts } from '../reduxComponents/postActions'
import PropTypes from 'prop-types';
import { Form, Image, Button, Grid, Card, Popup } from 'semantic-ui-react';
import { connect } from 'react-redux';

const styles = {
  card: {
    maxWidth: '300px',
  },
  root: {
    display: "flex",
    flexGrow: 1,
    flexWrap: "wrap",
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
};

function renderAssociatedItems() {
  console.log("before fetch, renderAssociatedItems in MyLocation, props is :",props);
  let posts = props.userPosts.filter(post => post.location_id === props.id)
}

function Location(props) {
  let desc = ""
  if (props.info.activities) {
    desc = props.info.activities[0].description
  } else if (props.info.description) {
    desc = props.info.desc
  }

  return (
    <Grid.Column>
      <Card>
        <Image src="http://pluspng.com/img-png/png-hiker-free-hiker-pictures-boy-scout-hiking-clip-art-image-1164.jpg" />
        <Card.Content>
          <Card.Header>{props.info.name}</Card.Header>
          <Card.Meta>{props.info.city}</Card.Meta>
          <Card.Meta>{props.info.state}</Card.Meta>
          <Card.Meta>Latitude: {props.info.lat}</Card.Meta>
          <Card.Meta>Longitude: {props.info.lon}</Card.Meta>
          <Card.Meta>Description: {desc}</Card.Meta>
          <Card.Meta>User Id: {props.userId}</Card.Meta>
          <Card.Meta>Arrival Date: {props.info.date}</Card.Meta>
          <Card.Meta>Arrival Time: {props.info.time}</Card.Meta>
        </Card.Content>
        <Popup trigger={<Button icon='add'>Show Requested Items</Button>}>
          <Grid centered divided columns={3}>
            {renderAssociatedItems()}
          </Grid>
        </Popup>
        <Button onClick={() => props.handleDeleteLocationClick(props.info)}>
          Remove From Your Locations
        </Button>
      </Card>
    </Grid.Column>
  );
}

function mapStateToProps(state) {
  return {
    userBookings: state.bookingReducer.userBookings,
    userPosts: state.postReducer.userPosts,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    fetchUserPosts: () => dispatch(fetchUserPosts())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Location);

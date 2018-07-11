import React from 'react';
import { fetchUserPosts } from '../reduxComponents/postActions'
import PropTypes from 'prop-types';
import { Form, Image, Button, Grid, Card, Popup, Header } from 'semantic-ui-react';
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

function MyLocation(props) {
  let desc = ""
  let username = ""

  if (props.info.activities) {
    desc = props.info.activities[0].description
  } else if (props.info.description) {
    desc = props.info.desc
  }

  if (props.user) {
    username = props.user.username
  } else {
    username = "Not Given"
  }

  function renderAssociatedItems() {
    console.log("before fetch, renderAssociatedItems in MyLocation, props is :",props);

    let posts = props.userPosts.filter(post => post.location_id === props.id)
    return posts.map(post => {
      return (
        <Grid.Column textAlign='center'>
          <Header as='h4'>{post.commodity.name}</Header>
            <p>
              <b>Date Needed: </b>{post.date_needed}
            </p>
            <p>
              <b>Date Posted: </b>{post.date_posted}
            </p>
          <Button>Choose</Button>
      </Grid.Column>
      )
    })
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
          <Card.Meta>User Trail Name: {username}</Card.Meta>
          <Card.Meta>Arrival Date: {props.info.date}</Card.Meta>
          <Card.Meta>Arrival Time: {props.info.time}</Card.Meta>
        </Card.Content>
        <Popup trigger={<Button>Show Requested Items</Button>} on='click'>
          <Grid centered divided columns={1}>
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
    user: state.loginReducer.user
  }
}

function mapDispatchToProps(dispatch) {
  return {
    fetchUserPosts: () => dispatch(fetchUserPosts())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MyLocation);

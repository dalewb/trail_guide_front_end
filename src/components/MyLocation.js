import React from 'react';
import { fetchUserPosts } from '../reduxComponents/postActions'
import { fetchUserBookings } from '../reduxComponents/bookingActions'
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
  } else if (props.info.desc) {
    desc = props.info.desc
  }

  if (props.user) {
    username = props.user.username
  } else {
    username = "Not Given"
  }

  function handleRemovePostFromLocation(post) {
    fetch(`http://localhost:3000/api/v1/posts/${post.id}`,{
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        "location_id": null
      })
    })
    .then(res => res.json())
    .then(json => props.fetchUserPosts())
  }

  function handleDeleteLocationClick(propsInfo) {
    fetch(`http://localhost:3000/api/v1/bookings/${propsInfo.id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(res => res.json())
      .then(json => props.fetchUserBookings())
  }

  function renderAssociatedItems() {
    console.log("THIS ONE props.userPosts is : ",props.userPosts);

    let posts = props.userPosts.filter(post => post.location_id === props.id)
    console.log(posts)
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
          <Button onClick={() => handleRemovePostFromLocation(post)}>Remove</Button>
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
          <Card.Meta>Longitude: {props.info.lon}</Card.Meta><br />
          Description:
          <Card.Meta>{desc}</Card.Meta><br />
          <Card.Meta>User Trail Name: {username}</Card.Meta>
          <Card.Meta>Arrival Date: {props.info.date}</Card.Meta>
          <Card.Meta>Arrival Time: {props.info.time}</Card.Meta>
        </Card.Content>
        <Popup trigger={<Button>Show Requested Items</Button>} on='click'>
          <Grid centered divided columns={1}>
            {renderAssociatedItems()}
          </Grid>
        </Popup>
        <Button onClick={() => handleDeleteLocationClick(props.info)}>
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
    fetchUserPosts: () => dispatch(fetchUserPosts()),
    fetchUserBookings: ()  => dispatch(fetchUserBookings()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MyLocation);

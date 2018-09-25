import React, { Component } from 'react';
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

class MyLocation extends Component {



  componentDidMount() {
    console.log("MY LOCATION RENDEREDDDDDDDD");
    console.log("props are", this.props);
    console.log("-------------------");
  }

  handleRemovePostFromLocation = (post) => {
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
    .then(json => this.props.fetchUserPosts())
  }

  handleDeleteLocationClick = (propsInfo) => {
    fetch(`http://localhost:3000/api/v1/bookings/${propsInfo.id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(res => res.json())
      .then(json => this.props.fetchUserBookings())
  }

  renderAssociatedItems = () => {

    let posts = this.props.userPosts.filter(post => post.location_id === this.props.id)
    console.log("renderAssociatedItems, props are ", this.props);
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
          <Button onClick={() => this.handleRemovePostFromLocation(post)}>Remove</Button>
      </Grid.Column>
      )
    })
  }

  render() {
    let desc = ""
    let username = ""

    if (this.props.info.activities) {
      desc = this.props.info.activities[0].description
    } else if (this.props.info.desc) {
      desc = this.props.info.desc
    }

    if (this.props.user) {
      username = this.props.user.username
    } else {
      username = "Not Given"
    }

    return (
      <Grid.Column>
        <Card>
          <Image src="http://pluspng.com/img-png/png-hiker-free-hiker-pictures-boy-scout-hiking-clip-art-image-1164.jpg" />
          <Card.Content>
            <Card.Header>{this.props.info.name}</Card.Header>
            <Card.Meta>{this.props.info.city}</Card.Meta>
            <Card.Meta>{this.props.info.state}</Card.Meta>
            <Card.Meta>Latitude: {this.props.info.lat}</Card.Meta>
            <Card.Meta>Longitude: {this.props.info.lon}</Card.Meta><br />
            Description:
            <Card.Meta>{desc}</Card.Meta><br />
            <Card.Meta>User Trail Name: {username}</Card.Meta>
            <Card.Meta>Arrival Date: {this.props.info.date}</Card.Meta>
            <Card.Meta>Arrival Time: {this.props.info.time}</Card.Meta>
          </Card.Content>
          <Popup trigger={<Button onClick={() => this.props.fetchUserPosts()}>Show Requested Items</Button>} on='click'>
            <Grid centered divided columns={1}>
              {this.renderAssociatedItems()}
            </Grid>
          </Popup>
          <Button onClick={() => this.handleDeleteLocationClick(this.props.info)}>
            Remove From Your Locations
          </Button>
        </Card>
      </Grid.Column>
    );
  }
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

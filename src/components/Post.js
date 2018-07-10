import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card, Image, Button, Grid } from 'semantic-ui-react';
// import Card from '../material-kit-react-v1.1.0/src/components/Card/Card'

class Post extends Component {

  renderPost = () => {
    let date_needed = ''
    let img_url = ''
    if (!this.props.info.date_needed) {
      date_needed = "Not Provided"
    } else {
      date_needed = this.props.info.date_needed
    }

    if (!this.props.info.img_url) {
      img_url = 'https://img.etsystatic.com/il/d0524c/1457330456/il_340x270.1457330456_izda.jpg?version=0'
    } else {
      img_url = this.props.info.img_url
    }
    console.log("Before debugger in render user post, this is: ", this);
    return (
      <Grid.Column>
        <Card>
          <Image src={img_url} />
          <Card.Content>
            <Card.Header>{this.props.info.commodity_name}</Card.Header>
            <Card.Meta>Trail Name: {this.props.user.username}</Card.Meta>
            <Card.Meta>Date Posted: {this.props.info.date_posted}</Card.Meta>
            <Card.Meta>Date Needed: {date_needed}</Card.Meta>
            <Card.Meta>Type: {this.props.user.user_type}</Card.Meta>
            <Card.Meta>Gender: {this.props.user.gender}</Card.Meta>
            <Card.Meta>Start Date: {this.props.user.start_date}</Card.Meta>
            <Button onClick={() => this.props.handleDeletePost(this.props.info.id)}>Delete</Button>
            <Button onClick={() => this.props.addPostToLocation(this.props.info.id)}>Add To Location</Button>
          </Card.Content>
        </Card>
      </Grid.Column>
    )
  }

  render() {
    return (
      <div>
        {this.renderPost()}
      </div>
    )
  }

}

function mapStateToProps(state) {
  console.log("Inside mapStateToProps in Post, state is: ", state);
  return {
    user: state.loginReducer.user
  }
}


export default connect(mapStateToProps)(Post);

import React, { Component } from 'react';
// import Card from '../material-kit-react-v1.1.0/src/components/Card/Card'

class Post extends Component {
  constructor(props) {
    super(props)

    this.state = {
      commodity: props.info.commodity,
      username: props.info.user.username,
      user_type: props.info.user.user_type,
      gender: props.info.user.gender,
      start_date: props.info.user.start_date,
    }
  }

  renderPost = () => {
    let date_needed = ''
    if (!this.props.info.date_needed) {
      date_needed = "Not Provided"
    } else {
      date_needed = this.props.info.date_needed
    }

    return (
      <div>
        <p>Item: {this.state.commodity.name}</p>
        <p>Date Posted: {this.props.info.date_posted}</p>
        <p>Date Needed: {date_needed}</p>
        <p>Trail Name: {this.state.username}</p>
        <p>Type: {this.state.user_type}</p>
        <p>Gender: {this.state.gender}</p>
        <p>Start Date: {this.state.start_date}</p>
        <button onClick={() => this.props.handleDeletePost(this.props.info.id)}>Delete</button>
        <button onClick={() => this.props.addLocationToPost(this.props.info.id)}>Add To Location</button>
      </div>
    )
  }

  render() {
    return (
      <div>
        {this.state.commodity ? this.renderPost() : null}
      </div>
    )
  }

}

export default Post;

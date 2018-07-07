import React, { Component } from 'react';
import { connect } from 'react-redux';
// import Card from '../material-kit-react-v1.1.0/src/components/Card/Card'

class Post extends Component {
  // constructor(props) {
  //   super(props)
  //   debugger
  //   this.state = {
  //     commodityName: props.info.commodity_name,
  //     username: props.info.user.username,
  //     user_type: props.info.user.user_type,
  //     gender: props.info.user.gender,
  //     start_date: props.info.user.start_date,
  //   }
  // }

  renderPost = () => {
    let date_needed = ''
    if (!this.props.info.date_needed) {
      date_needed = "Not Provided"
    } else {
      date_needed = this.props.info.date_needed
    }

    return (
      <div>
        <p>Post</p>
        <p>Item: {this.props.commodity_name}</p>
        <p>Date Posted: {this.props.info.date_posted}</p>
        <p>Date Needed: {date_needed}</p>
        <p>Trail Name: Need to connect user props</p>
        <p>Type: Need to connect user props</p>
        <p>Gender: Need to connect user props</p>
        <p>Start Date: Need to connect user props</p>
        <button onClick={() => this.props.handleDeletePost(this.props.info.id)}>Delete</button>
        <button onClick={() => this.props.addLocationToPost(this.props.info.id)}>Add To Location</button>
      </div>
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


export default connect()(Post);

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
        <p>Item: {this.props.info.commodity_name}</p>
        <p>Date Posted: {this.props.info.date_posted}</p>
        <p>Date Needed: {date_needed}</p>
        <p>Trail Name: {this.props.user.username}</p>
        <p>Type: {this.props.user.user_type}</p>
        <p>Gender: {this.props.user.gender}</p>
        <p>Start Date: {this.props.user.start_date}</p>
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

function mapStateToProps(state) {
  console.log("Inside mapStateToProps in Post, state is: ", state);
  return {
    user: state.loginReducer.user
  }
}


export default connect(mapStateToProps)(Post);

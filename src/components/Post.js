import React, { Component } from 'react';
// import Card from '../material-kit-react-v1.1.0/src/components/Card/Card'

class Post extends Component {
  constructor() {
    super()

    this.state = {
      commodity: '',
      username: '',
      user_type: '',
      gender: '',
      start_date: '',
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
      </div>
    )
  }

  componentDidMount() {
    fetch(`http://localhost:3000/api/v1/commodities/${this.props.info.commodity_id}`)
      .then(res => res.json())
      .then(json => this.setState({
        commodity: json.data
      }, () => this.renderPost()))

    fetch(`http://localhost:3000/api/v1/users/${this.props.info.user_id}/`)
      .then(res => res.json())
      .then(json => this.setState({
        username: json.data.username,
        user_type: json.data.user_type,
        gender: json.data.gender,
        start_date: json.data.start_date,
      }, () => {console.log(this.state)}))
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

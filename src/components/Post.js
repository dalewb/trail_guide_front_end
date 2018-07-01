import React, { Component } from 'react';

class Post extends Component {
  constructor() {
    super()

    this.state = {
      commodity: '',
    }
  }

  renderPost = () => {
    return (
      <div>
        <p>Post Date: {this.props.info.date_posted}</p>
        <p>Item: {this.state.commodity.name}</p>
      </div>
    )
  }

  componentDidMount() {
    fetch(`http://localhost:3000/api/v1/commodities/${this.props.info.commodity_id}`)
      .then(res => res.json())
      .then(json => this.setState({
        commodity: json.data
      }, () => this.renderPost()))
  }

  render() {
    return (
      this.state.commodity ? this.renderPost() : null
    )
  }

}

export default Post;

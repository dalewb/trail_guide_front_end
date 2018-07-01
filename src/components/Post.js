import React, { Component } from 'react';
// import Card from '../material-kit-react-v1.1.0/src/components/Card/Card'

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

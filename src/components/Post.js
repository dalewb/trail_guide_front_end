import React, { Component } from 'react';

class Post extends Component {

  render() {
    return (
      <div>
        <p>Post Info: {this.props.info.date_needed}</p>
      </div>
    )
  }

}

export default Post;

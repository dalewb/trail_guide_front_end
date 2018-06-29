import React { Component }, from 'react';
import Post from '../components/Post'

class UserPosts extends Component {

  renderUserPosts = () => {
    this.props.userPosts.map(post => {
      return (
        <Post info={post}/>
      )
    })
  }

  render() {

  }

}

export default UserPosts;

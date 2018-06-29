import React, { Component } from 'react';
import Post from '../components/Post'

class UserPosts extends Component {
  constructor() {
    super()

    this.state = {
      posts: [],
    }
  }

  componentDidMount() {
    // need user id instead of 1, will come from auth and sessions?
    fetch(`http://localhost:3000/api/v1/posts/`)
      .then(res => res.json())
      .then(json => {this.setState({
        posts: json.data
      }, () => {console.log(this.state)})})
  }

  renderUserPosts = (posts) => {

    return this.state.posts.map(post => {
      return (
        <Post info={post}/>
      )
    })
  }

  render() {
    return (
      this.state.posts.length > 0 ? this.renderUserPosts() : null
    )
  }

}

export default UserPosts;

import React, { Component } from 'react';
import Post from '../components/Post'

class UserPosts extends Component {
  constructor() {
    super()

    this.state = {
      posts: [],
    }
  }

  getPosts = () => {
    fetch(`http://localhost:3000/api/v1/posts/`)
      .then(res => res.json())
      .then(json => {this.setState({
        posts: json.data
      }, () => {console.log(this.state)})})
  }

  componentDidMount() {
    // need user id instead of 1, will come from auth and sessions?
    this.getPosts()
  }

  renderUserPosts = () => {
    return this.state.posts.map(post => {
      return (
        <Post info={post} key={post.id} handleDeletePost={this.handleDeletePost} />
      )
    })
  }

  handleDeletePost = (deleteId) => {
    fetch(`http://localhost:3000/api/v1/posts/${deleteId}`, {
      method: 'delete'
    })
      .then(res => res.json())
      .then(data => {this.getPosts()})
  }

  render() {
    return (
      <div>
        <h2>Your Requests</h2>
        {this.state.posts.length > 0 ? this.renderUserPosts() : null}
      </div>
    )
  }

}

export default UserPosts;

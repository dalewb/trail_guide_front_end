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
      })
    })
  }

  componentDidMount() {
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
      method: 'delete',
      headers: {
        "Content-Type": "application/json"
      }
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

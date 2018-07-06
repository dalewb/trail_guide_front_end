import React, { Component } from 'react';
import Post from '../components/Post'

class UserPosts extends Component {
  constructor() {
    super()

    this.state = {
      posts: [],
      renderLocations: false,
    }
  }

  componentDidMount() {
    this.getPosts()
  }

  getPosts = () => {
    fetch(`http://localhost:3000/api/v1/posts/`)
      .then(res => res.json())
      .then(json => {this.setState({
        posts: json
      })
    })
  }

  AddLocationToPost = () => {

  }

  renderUserPosts = () => {
    return this.state.posts.map(post => {
      return (
        <Post
          info={post}
          key={post.id}
          handleDeletePost={this.handleDeletePost}
          AddLocationToPost={this.AddLocationToPost}
        />
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
        <h3>Your Requests!</h3>
        {this.state.posts.length > 0 ? this.renderUserPosts() : null}
      </div>
    )
  }

}

export default UserPosts;

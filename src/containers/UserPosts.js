import React, { Component } from 'react';
import Post from '../components/Post';
import { connect } from 'react-redux';

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
    fetch(`http://localhost:3000/api/v1/1/posts/`)
      .then(res => res.json())
      .then(json => {this.setState({
        posts: json
      })
    })
  }

  AddLocationToPost = () => {

  }

  renderUserPosts = () => {
    debugger
    return this.props.posts.map(post => {
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
    debugger
    return (
      <div>
        <h3>Your Requests!</h3>
        {this.props.posts.length > 0 ? this.renderUserPosts() : null}
      </div>
    )
  }

}

function mapStateToProps(state) {
  return {
    posts: [],
    renderLocations: false,
  }
}

export default connect(mapStateToProps)(UserPosts);

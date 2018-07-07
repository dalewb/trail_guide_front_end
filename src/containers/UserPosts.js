import React, { Component } from 'react';
import Post from '../components/Post';
import { connect } from 'react-redux';
import {fetchPosts} from '../reduxComponents/actions';

class UserPosts extends Component {

  componentDidMount() {
    this.props.dispatch(fetchPosts())
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
    return this.props.userCommodities.map(post => {
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
    const { error, loading, userCommodities } = this.props;

    if (error) {
      return <div>Error! {error.message}</div>;
    }

    if (loading) {
      return <div>Loading...</div>;
    }

    return (
      <div>
        <h3>Your Requests!</h3>
        {userCommodities.length > 0 ? this.renderUserPosts() : null}
      </div>
    )
  }

}

function mapStateToProps(state) {
  console.log("mapStateToProps", state);
  return {
    userCommodities: state.userCommodities,
    loading: state.loading,
    error: state.error,
    renderLocations: false,
  }
}

// function mapDispatchToProps(dispatch) {
//   return {
//     fetchPosts: () => {
//       dispatch({type: "FETCH_POSTS_BEGIN"})
//     }
//   }
// }

export default connect(mapStateToProps)(UserPosts);

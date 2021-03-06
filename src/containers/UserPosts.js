import React, { Component } from 'react';
import Post from '../components/Post';
import LocationToPost from '../components/LocationToPost';
import { connect } from 'react-redux';
import { fetchCommodities, fetchUserPosts, deletePost } from '../reduxComponents/postActions';
import { Card, Button, Grid } from 'semantic-ui-react';
// import { bindActionCreators } from 'redux'

class UserPosts extends Component {
  state = {
    locationToPostId: null,
    showPosts: true,
  }

  toggleShowPosts = () => {
    this.setState({
      showPosts: !this.state.showPosts,
    })
  }

  addPostToLocation = (post_id) => {
    console.log("addPostToLocation inside UserPosts, this.props is: ",this.props);
    // this.props, find the post according to the post id, get it to render on the popup
    this.setState({
      locationToPostId: post_id,
    }, () => this.toggleShowPosts())
  }

  renderUserPosts = () => {
    return this.props.userCommodities.map(post => {
      return (
        <Post
          info={post}
          key={post.id}
          handleDeletePost={this.handleDeletePost}
          addPostToLocation={this.addPostToLocation}
        />
      )
    })
  }

  renderAddToLocations = () => {
    return (
      <LocationToPost
        postId={this.state.locationToPostId}
        toggleShowPosts={this.toggleShowPosts}
      />
    )
  }

  handleDeletePost = (deleteId) => {
    this.props.deletePost(deleteId)
    .then(res => this.props.fetchCommodities())
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
        { this.state.locationToPostId ? <LocationToPost postId={this.state.locationToPostId}/> : null}
        <Grid padded columns={4}>
        {userCommodities && this.state.showPosts ? this.renderUserPosts() : null}
        </Grid>
      </div>
    )
  }

}

function mapStateToProps(state) {
  return {
    userCommodities: state.postReducer.userCommodities,
    userPosts: state.postReducer.userPosts,
    user: state.loginReducer.user,
    loading: state.loading,
    error: state.error,
    renderLocations: false,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    fetchCommodities: () => dispatch(fetchCommodities()),
    fetchUserPosts: () => {dispatch(fetchUserPosts())},
    deletePost: (deleteId) => dispatch(deletePost(deleteId)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserPosts);

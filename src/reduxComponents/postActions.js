export const FETCH_POSTS_BEGIN   = 'FETCH_POSTS_BEGIN';
export const FETCH_POSTS_SUCCESS = 'FETCH_POSTS_SUCCESS';
export const FETCH_POSTS_FAILURE = 'FETCH_POSTS_FAILURE';
export const DELETE_POST = 'DELETE_POST';

// export const fetchPostsBegin = () => ({
//   type: FETCH_POSTS_BEGIN
// });
//
// export const fetchPostsSuccess = posts => ({
//   type: FETCH_POSTS_SUCCESS,
//   payload: { posts }
// });
//
// export const fetchPostsFailure = error => ({
//   type: FETCH_POSTS_FAILURE,
//   payload: { error }
// });

export const postDeleted = () => ({
  type: DELETE_POST
})

export function fetchPosts() {
  console.log("Inside Fetch Posts");
  return dispatch => {
    // dispatch(fetchPostsBegin());
    return fetch(`http://localhost:3000/api/v1/1/posts/`)
      // .then(res => handleErrors(res))
      .then(res => res.json())
      .then(json => {
        dispatch({ type: "FETCH_POSTS", payload: json })
        // dispatch(fetchPostsSuccess(json));
        // return json;
      })
      // .catch(error => dispatch(fetchPostsFailure(error)));
  };
}

export function deletePost(deleteId) {
  return dispatch => {
    return fetch(`http://localhost:3000/api/v1/posts/${deleteId}`, {
      method: 'delete',
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(res => res.json())
      .then(json => {
        dispatch(postDeleted())
        return json
      })
  }
}

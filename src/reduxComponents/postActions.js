export const postDeleted = () => ({
  type: "DELETE_POST"
})

export function fetchPosts() {
  console.log("Inside Fetch Posts");
  return dispatch => {
    return fetch(`http://localhost:3000/api/v1/1/posts/`)
      .then(res => res.json())
      .then(json => {
        dispatch({ type: "FETCH_POSTS", payload: json })
      })
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

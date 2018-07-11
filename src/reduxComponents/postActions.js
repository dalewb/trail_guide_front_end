export const postDeleted = () => ({
  type: "DELETE_POST"
})

export function fetchCommodities() {
  console.log("Inside Fetch Posts");
  return dispatch => {
    return fetch(`http://localhost:3000/api/v1/1/posts/commodities`)
      .then(res => res.json())
      .then(json => {
        dispatch({ type: "FETCH_COMMODITIES", payload: json })
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

export const FETCH_BOOKINGS_BEGIN   = 'FETCH_BOOKINGS_BEGIN';
export const FETCH_BOOKINGS_SUCCESS = 'FETCH_BOOKINGS_SUCCESS';
export const FETCH_BOOKINGS_FAILURE = 'FETCH_BOOKINGS_FAILURE';

export const fetchBookingsBegin = () => ({
  type: FETCH_BOOKINGS_BEGIN
});

export const fetchBookingsSuccess = bookings => ({
  type: FETCH_BOOKINGS_SUCCESS,
  payload: { bookings }
});

export const fetchBookingsFailure = error => ({
  type: FETCH_BOOKINGS_FAILURE,
  payload: { error }
});

export function fetchBookings() {
  console.log("Inside Fetch Bookings")
  return dispatch => {
    dispatch(fetchBookingsBegin());
    return fetch(`http://localhost:3000/api/v1/1/bookings/`)
      .then(res => handleErrors(res))
      .then(res => res.json())
      .then(json => {
        dispatch(fetchBookingsSuccess(json));
        return json;
      })
      .catch(error => dispatch(fetchBookingsFailure(error)));
  };
}

// Handle HTTP errors since fetch won't.
function handleErrors(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}

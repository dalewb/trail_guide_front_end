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

export function fetchBookings(city, state) {
  console.log("Inside Fetch Bookings")
  return dispatch => {
    dispatch(fetchBookingsBegin());
    return fetch(`https://trailapi-trailapi.p.mashape.com/?limit=25&q[activities_activity_type_name_eq]=hiking&q[city_cont]=${city}&q[state_cont]=${state}&radius=25`, {
      method: 'get',
      headers: {
        'X-Mashape-Key': 'x78qgG0HjVmshFnNVySkv4C0uBffp1B5UsfjsnDU67H0VVAOmg',
        'Accept': 'application/json'
      },
    })
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

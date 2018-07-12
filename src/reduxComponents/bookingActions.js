
export function fetchBookings(city, state) {
  console.log("Inside Fetch Bookings")
  return dispatch => {
    return fetch(`https://trailapi-trailapi.p.mashape.com/?limit=25&q[activities_activity_type_name_eq]=hiking&q[city_cont]=${city}&q[state_cont]=${state}&radius=25`, {
      method: 'get',
      headers: {
        'X-Mashape-Key': 'x78qgG0HjVmshFnNVySkv4C0uBffp1B5UsfjsnDU67H0VVAOmg',
        'Accept': 'application/json'
      },
    })
      .then(res => res.json())
      .then(json => {
        dispatch({ type: "FETCH_BOOKINGS", payload: json });
      })
  };
}

export function fetchUserBookings() {
  console.log("In fetchUserBookings in bookingActions")
  return dispatch => {
    return fetch("http://localhost:3000/api/v1/1/bookings")
      .then(res => res.json())
      .then(json => {
        dispatch({ type: "FETCH_USER_BOOKINGS", payload: json})
      })
  }
}

// export function deleteBooking() {
//   return dispatch => {
//     return fetch(`http://localhost:3000/api/v1/bookings/${e.id}`, {
//   		method: "DELETE",
//   		headers: {
//   			"Content-Type": "application/json"
//   		}
//   	})
//   		.then(res => res.json())
//       .then(json => {
//         dispatch({ type: "DELETE_BOOKING" })
//       })
//   }
// }

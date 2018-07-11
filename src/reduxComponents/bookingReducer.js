
const initialState = {
  allCommodities: [],
  allLocations: [],
  userCommodities: [],
  userLocations: [],
  userBookings: [],
  userPosts: [],
  user: {},
  loading: false,
  error: null,
};

export default function bookingReducer(state = initialState, action) {
  switch(action.type) {
    case "FETCH_BOOKINGS":
      console.log("FETCH_BOOKING_SUCCESS in bookingReducer hit.");
      console.log("action is: ", action);
      console.log("--------------------");
      return {
        ...state,
        allLocations: action.payload.places,
      };

    case "FETCH_USER_BOOKINGS":
      console.log("In FETCH_USER_BOOKINGS, action is: ", action);
      console.log("In FETCH_USER_BOOKINGS, state is: ", state);
      return {
        ...state,
        userBookings: action.payload.data
      }

    default:
      return state;
  }
}

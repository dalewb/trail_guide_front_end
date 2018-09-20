
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
      return {
        ...state,
        allLocations: action.payload.places,
      };

    case "FETCH_USER_BOOKINGS":
      return {
        ...state,
        userBookings: action.payload.data
      }

    default:
      return state;
  }
}



const initialState = {
  allCommodities: [],
  allLocations: [],
  userCommodities: [],
  userLocations: [],
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
        loading: false,
        userLocations: action.payload.places,
      };

    default:
      return state;
  }
}

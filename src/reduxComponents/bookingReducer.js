import {
  FETCH_BOOKINGS_BEGIN,
  FETCH_BOOKINGS_SUCCESS,
  FETCH_BOOKINGS_FAILURE
} from './bookingActions';

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
    case FETCH_BOOKINGS_BEGIN:
      // Mark the state as "loading" so we can show a spinner or something
      // Also, reset any errors. We're starting fresh.
      return {
        ...state,
        loading: true,
        error: null,
      };

    case FETCH_BOOKINGS_SUCCESS:
      // All done: set loading "false".
      // Also, replace the bookings with the ones from the server
      console.log("FETCH_BOOKING_SUCCESS in bookingReducer hit.");
      console.log("action is: ", action);
      console.log("--------------------");
      return {
        ...state,
        loading: false,
        userLocations: action.payload.bookings.places,
      };

    case FETCH_BOOKINGS_FAILURE:
      // The request failed, but it did stop, so set loading to "false".
      // Save the error, and we can display it somewhere
      // Since it failed, we don't have bookings to display anymore, so set it empty.
      // This is up to you and your app though: maybe you want to keep the bookings
      // around! Do whatever seems right.
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };

    default:
      // ALWAYS have a default case in a reducer
      return state;
  }
}

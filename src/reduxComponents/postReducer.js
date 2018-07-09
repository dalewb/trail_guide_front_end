import {
  FETCH_POSTS_BEGIN,
  FETCH_POSTS_SUCCESS,
  FETCH_POSTS_FAILURE,
  DELETE_POST
} from './postActions';

const initialState = {
  allCommodities: [],
  userCommodities: [],
  loading: false,
  error: null,
};

export default function postReducer(state = initialState, action) {
  switch(action.type) {
    case FETCH_POSTS_BEGIN:
      // Mark the state as "loading" so we can show a spinner or something
      // Also, reset any errors. We're starting fresh.
      return {
        ...state,
        loading: true,
        error: null,
      };

    case FETCH_POSTS_SUCCESS:
      // All done: set loading "false".
      // Also, replace the posts with the ones from the server
      return {
        ...state,
        loading: false,
        userCommodities: action.payload.posts,
      };

    case FETCH_POSTS_FAILURE:
      // The request failed, but it did stop, so set loading to "false".
      // Save the error, and we can display it somewhere
      // Since it failed, we don't have posts to display anymore, so set it empty.
      // This is up to you and your app though: maybe you want to keep the posts
      // around! Do whatever seems right.
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };

      case DELETE_POST:

      return {
        ...state
      }

    default:
      // ALWAYS have a default case in a reducer
      return state;
  }
}

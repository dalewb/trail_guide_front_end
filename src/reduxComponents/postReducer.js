const initialState = {
  allCommodities: [],
  userCommodities: [],
  loading: false,
  error: null,
};

export default function postReducer(state = initialState, action) {

  switch(action.type) {

    case "FETCH_POSTS":
      return {
        ...state,
        userCommodities: action.payload
      };

    case "DELETE_POST":
      return {
        ...state
      }

    default:
      return state;
  }
}

import {
  SET_USER
} from './loginActions';

const initialState = {
  allCommodities: [],
  userCommodities: [],
  user: '',
  loading: false,
  error: null,
};

export default function loginReducer(state = initialState, action) {
  switch(action.type) {

    case SET_USER:
      return {
        ...state,
        user: action.payload.user
    }

    default:
      return state;
  }
}

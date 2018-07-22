import { ADD_USER, LOGIN_GUEST, LOGOUT } from '../actions/types.js';

const initialState = {
  currentUser: {}
};
//username, id, token

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case ADD_USER:
      return {...state, currentUser: action.payload}
    case LOGIN_GUEST:
      return {...state, currentUser: action.payload}
    case LOGOUT:
      console.log(state)
      return { ...state, currentUser: {} }
    default:
      return state;
  }
}
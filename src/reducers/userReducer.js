import { REGISTER, LOGIN_GUEST, LOGIN, LOGOUT, ADD_USER_SUBSCRIPTION, DELETE_USER_SUBSCRIPTION } from '../actions/types.js';

const initialState = {
  currentUser: {},
  userSubscriptions: []
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case REGISTER:
      return {...state, currentUser: action.payload}
    case LOGIN:
      return { ...state, currentUser: action.payload }
    case LOGIN_GUEST:
      return { ...state, currentUser: action.payload}
    case LOGOUT:
      return { ...state, currentUser: {}}
    case ADD_USER_SUBSCRIPTION:
      let userSubscriptions = [...state.userSubscriptions, action.payload]
      return {...state, userSubscriptions }
    case DELETE_USER_SUBSCRIPTION:
      return {
        ...state,
        userSubscriptions: [...state.userSubscriptions.slice(0, action.payload)],
        userSubscriptions: [...state.userSubscriptions.slice(action.payload, 1)]
      }
    default:
      return state;
  }
}
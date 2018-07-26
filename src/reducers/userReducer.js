import { 
  REGISTER, 
  LOGIN_GUEST, 
  LOGIN, 
  LOGOUT, 
  ADD_USER_SUBSCRIPTION, 
  DELETE_USER_SUBSCRIPTION, 
  GET_USER_SUBSCRIPTIONS,
  PERSIST_USER
} from '../actions/types.js';

const initialState = {
  currentUser: {},
  userSubscriptions: []
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case REGISTER:
      return {
        ...state, 
        currentUser: action.payload
      }
    case LOGIN:
      return { 
        ...state, 
        currentUser: action.payload
      }
    case PERSIST_USER:
      return {
        ...state,
        currentUser: action.payload
      }
    case LOGIN_GUEST:
      return { 
        ...state, 
        currentUser: action.payload
      }
    case LOGOUT:
      return { 
        ...state, 
        currentUser: {}
      }
    case GET_USER_SUBSCRIPTIONS:
      return {
        ...state,
        userSubscriptions: action.payload
      }
    case ADD_USER_SUBSCRIPTION:
      return {
        ...state,
        userSubscriptions: action.payload
      }
    case DELETE_USER_SUBSCRIPTION:
      return {
        ...state,
        userSubscriptions: action.payload
      }
    default:
      return state;
  }
}
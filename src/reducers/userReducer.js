import { 
  REGISTER, 
  LOGIN_GUEST, 
  LOGIN, 
  LOGOUT, 
  ADD_USER_SUBSCRIPTION, 
  DELETE_USER_SUBSCRIPTION, 
  GET_USER_SUBSCRIPTIONS,
  PERSIST_USER,
  SET_SUBSCRIPTION_DATE,
  SET_SUBSCRIPTION_COST
} from '../actions/types.js';

const initialState = {
  currentUser: {},
  userSubscriptions: [],
  userSubscriptionInfo: {}
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case SET_SUBSCRIPTION_DATE:
      return {
        ...state,
        userSubscriptionInfo: { ...state.userSubscriptionInfo }
      }
    case SET_SUBSCRIPTION_COST:
      return {
        ...state,
        userSubscriptionInfo: { ...state.userSubscriptionInfo }
      }
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
      if (state.userSubscriptions.map(s => s.id).includes(action.payload.subscriptions.id)) {
        return state
      }
      return {
        ...state,
        userSubscriptions: [...state.userSubscriptions, action.payload.subscriptions]
      }
    case DELETE_USER_SUBSCRIPTION:
      let id = action.payload.subscriptions.id
      let index = state.userSubscriptions.map(s=>s.id).indexOf(id)
      return {
        ...state,
        userSubscriptions: [
          ...state.userSubscriptions.slice(0, index),
          ...state.userSubscriptions.slice(index+1)
        ]
      }
    default:
      return state;
  }
}
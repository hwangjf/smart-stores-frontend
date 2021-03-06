import { GET_SUBSCRIPTION_INDEX, NEWS_SUBSCRIPTION } from '../actions/types.js';

const initialState = {
  subscriptions: [],
  term: 'Netflix'
};

export default function subscriptionReducer(state = initialState, action) {
  switch (action.type) {
    case GET_SUBSCRIPTION_INDEX:
      return {...state, subscriptions: action.payload.subscriptions}
    case NEWS_SUBSCRIPTION:
      return {...state, term: action.payload}
    default:
      return state;
  }
}
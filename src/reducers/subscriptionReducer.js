import { GET_SUBSCRIPTION_INDEX } from '../actions/types.js';

const initialState = {
  subscriptions: []
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case GET_SUBSCRIPTION_INDEX:
      return [...state, action.payload]
    default:
      return state;
  }
}
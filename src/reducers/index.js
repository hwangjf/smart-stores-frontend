import { combineReducers } from 'redux';
import userReducer from './userReducer';
// import subscriptionReducer from './subscriptionReducer';

export default combineReducers({
  user: userReducer,
  // subscription: subscriptionReducer,
})


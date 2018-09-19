import { 
  REGISTER, 
  LOGIN, 
  LOGIN_GUEST, 
  LOGOUT, 
  ADD_USER_SUBSCRIPTION, 
  DELETE_USER_SUBSCRIPTION,
  GET_USER_SUBSCRIPTIONS,
  PERSIST_USER,
  GET_SUBSCRIPTION_INDEX,
  NEWS_SUBSCRIPTION,
  SET_SUBSCRIPTION_DATE,
  SET_SUBSCRIPTION_COST,
  GET_USER_SUBSCRIPTIONS_INFO
} from './types';
import Adapter from '../Adapter';

export const getUserSubscriptionsInfo = (userId, subscriptionId) => dispatch => {
  return Adapter.getUserSubscriptionsInfo(userId, subscriptionId)
    .then(response => response.json())
    .then(usersubscription => {
      dispatch({
        type: GET_USER_SUBSCRIPTIONS_INFO,
        payload: usersubscription
      })
    })
}

export const setSubscriptionDate = (userId, subscriptionId, date) => dispatch => {
  Adapter.setSubscriptionDate(userId, subscriptionId, date)
    .then(response => response.json())
    .then(usersubscription=> {
      dispatch({
        type: SET_SUBSCRIPTION_DATE,
        payload: usersubscription
      })
    })
}

export const setSubscriptionCost = (userId, subscriptionId, cost) => dispatch => {
  Adapter.setSubscriptionCost(userId, subscriptionId, cost)
    .then(response => response.json())
    .then(usersubscription => {
      dispatch({
        type: SET_SUBSCRIPTION_COST,
        payload: usersubscription
      })
    })
}

export const newsSubscription = (subscription) => dispatch => {
  dispatch({
    type: NEWS_SUBSCRIPTION,
    payload: subscription
  })
}

export const getUserSubscriptions = (userId) => dispatch => {
  return Adapter.getUserSubscriptions(userId)
    .then(response => response.json())
    .then(subscriptions => {
      dispatch({
        type: GET_USER_SUBSCRIPTIONS,
        payload: subscriptions
      })
    })
}

export const getSubscriptionIndex = () => dispatch => {
  return Adapter.getSubscriptionIndex()
    .then(response => response.json())
    .then(subscriptions => {
      dispatch({
        type: GET_SUBSCRIPTION_INDEX,
        payload: {
          subscriptions: subscriptions
        }
      })
    })
}

export const persistUser = () => dispatch => {
  return Adapter.refresh()
    .then(response => response.json())
    .then(user => {
      dispatch({
        type: PERSIST_USER,
        payload: {
          username: user.username,
          id: user.id 
        }
      })
      dispatch(getUserSubscriptions(user.id))
    })
}

export const addUserSubscription = (userId, subscriptionId) => dispatch => {
  return Adapter.addUserSubscription(userId, subscriptionId)
    .then(response => response.json())
    .then(subscriptions => {
      dispatch({
        type: ADD_USER_SUBSCRIPTION,
        payload: {
          subscriptions: subscriptions
        }
      })
    })
}

export const deleteUserSubscription = (userId, subscriptionId) => dispatch => {
  return Adapter.deleteUserSubscription(userId, subscriptionId)
    .then(response => response.json())
    .then(subscriptions => {
      dispatch({
        type: DELETE_USER_SUBSCRIPTION,
        payload: {
          subscriptions: subscriptions
        }
      })
    })
}

export const loginGuest = () => dispatch => {
  return Adapter.loginGuest()
    .then(response => response.json())
    .then(user => {
      localStorage.setItem('token', user.token);
      dispatch({
        type: LOGIN_GUEST,
        payload: user
      })
    })
}

export const logout = () => dispatch => {
  Adapter.logout();
  dispatch({
    type: LOGOUT
  })
}

export const register = (user) => dispatch => {
  return Adapter.register(user)
    .then(response => response.json())
    .then(user => {
      if (user.errors) {
        dispatch({
          type: LOGOUT
        })
      } else {
        localStorage.setItem('token', user.token);
        dispatch({
          type: REGISTER,
          payload: user
        })
      }
    })
};

export const login = (user) => dispatch => {
  return Adapter.login(user)
    .then(response => response.json())
    .then(user => {
      if (user.errors) {
        dispatch({
          type: LOGOUT
        })
      } else {
        localStorage.setItem('token', user.token);
        dispatch({
          type: LOGIN,
          payload: user
        })
      }
    })
}
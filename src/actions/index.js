import { 
  REGISTER, 
  LOGIN, 
  LOGIN_GUEST, 
  LOGOUT, 
  ADD_USER_SUBSCRIPTION, 
  DELETE_USER_SUBSCRIPTION,
  GET_USER_SUBSCRIPTIONS,
  PERSIST_USER
} from './types';
import Adapter from '../Adapter'; 

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

export const persistUser = () => dispatch => {
  return Adapter.refresh()
    .then(response => response.json())
    .then(user => {
      dispatch({
        type: PERSIST_USER,
        payload: user
      })
    })
}

export const addUserSubscription = (userId, subscriptionId) => dispatch => {
  return Adapter.addUserSubscription(userId, subscriptionId)
    .then(response => response.json())
    .then(subscriptions => {
      dispatch({
        type: ADD_USER_SUBSCRIPTION,
        payload: subscriptions
      })
    })
}

export const deleteUserSubscription = (userId, subscriptionId) => dispatch => {
  return Adapter.deleteUserSubscription(userId, subscriptionId)
    .then(response => response.json())
    .then(subscriptions => {
      dispatch({
        type: DELETE_USER_SUBSCRIPTION,
        payload: subscriptions
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
  Adapter.register(user)
    .then(response => response.json())
    .then(user => {
      localStorage.setItem('token', user.token);
      dispatch({
        type: REGISTER,
        payload: user
      })
    })
};

export const login = (user) => dispatch => {
  return Adapter.login()
    .then(response => response.json())
    .then(user => {
      localStorage.setItem('token', user.token);
      dispatch({
        type: LOGIN,
        payload: user
      })
    })
}
// export const createPost = postData => dispatch => {
//   fetch('https://jsonplaceholder.typicode.com/posts', {
//     method: 'POST',
//     headers: {
//       'content-type': 'application/json'
//     },
//     body: JSON.stringify(postData)
//   })
//     .then(res => res.json())
//     .then(post =>
//       dispatch({
//         type: NEW_POST,
//         payload: post
//       })
//     );
// };
import { REGISTER, LOGIN, LOGIN_GUEST, LOGOUT, ADD_USER_SUBSCRIPTION, DELETE_USER_SUBSCRIPTION } from './types';
import Adapter from '../Adapter'; 

export const addUserSubscription = (userId, subscriptionId) => dispatch => {
  Adapter.addUserSubscription(userId, subscriptionId)
}

export const deleteUserSubscription = (userId, subscriptionId) => dispatch => {
  Adapter.deleteUserSubscription(userId, subscriptionId)
}

export const loginGuest = () => dispatch => {
  Adapter.isLoggedIn();
  Adapter.loginGuest()
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
  Adapter.login()
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
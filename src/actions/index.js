import { ADD_USER, LOGIN, LOGIN_GUEST, LOGOUT } from './types';
import Adapter from '../Adapter';

export const loginGuest = () => dispatch => {
  fetch('http://localhost:4000/api/v1/sessions', {
    method: 'POST',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify({
      username: "guest",
      password: "guest"
    })
  })
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

export const addUser = (user) => dispatch => {
  fetch('http://localhost:4000/api/v1/users', {
    method: 'POST',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify(user)
  })
    .then(response => response.json())
    .then(user => {
      localStorage.setItem('token', user.token);
      dispatch({
        type: ADD_USER,
        payload: user
      })
    })
};

export const logIn = (user) => dispatch => {
  fetch('http://localhost:4000/api/v1/sessions', {
    method: 'POST',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify(user)
  })
    .then(response => response.json())
    .then(user => {
      localStorage.setItem('token', user.token);
      dispatch({
        type: ADD_USER,
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
import Adapter from './Adapter';

export const ADD_USER = "ADD_USER";

export function addUser(name) {
  return {
    type: ADD_USER,
    payload: { name }
  }
}
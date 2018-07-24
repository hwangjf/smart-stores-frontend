const backend_url = 'http://localhost:4000/api/v1'

export default class Adapter {
  static addUserSubscription(userId, subscriptionId) {
    return fetch(backend_url + '/users/' + userId + '/subscriptions/' + subscriptionId, {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      }
    })
  }

  static deleteUserSubscription(userId, subscriptionId) {
    return fetch(backend_url + '/users/' + userId + '/subscriptions/' + subscriptionId, {
      method: 'DELETE',
      headers: {
        'content-type': 'application/json'
      }
    })
  }

  static getSubscriptionIndex() {
    return fetch(backend_url + '/subscriptions')
  }

  static getUserSubscriptions(userId) {
    return fetch(backend_url + '/users/' + userId + '/subscriptions')
  }

  static isLoggedIn() {
    return !!localStorage.getItem('token')
  }

  static logout() {
    localStorage.removeItem('token');
  }

  static loginGuest() {
    return fetch(backend_url + '/sessions', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({
        username: "guest",
        password: "guest"
      })
    })
  }

  static login(user) {
    return fetch(backend_url + '/sessions', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(user)
    })
  }

  static register(user) {
    return fetch(backend_url + '/users', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(user)
    })
  }

  // static getKey() {
  //   return 1
  //   // return API_KEY
  // }
}

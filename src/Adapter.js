const backend_url = 'http://localhost:4000/api/v1'

export default class Adapter {

  static addUserSubscription(userId, subscriptionId) {
    const config = {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'authorization': localStorage.getItem('token')
      }
    }
    return fetch(backend_url + '/users/' + userId + '/subscriptions/' + subscriptionId, config)
  }

  static deleteUserSubscription(userId, subscriptionId) {
    const config = {
      method: 'DELETE',
      headers: {
        'content-type': 'application/json',
        'authorization': localStorage.getItem('token')
      }
    }
    return fetch(backend_url + '/users/' + userId + '/subscriptions/' + subscriptionId, config)
  }

  static getSubscriptionIndex() {
    return fetch(backend_url + '/subscriptions')
  }

  static getUserSubscriptions(userId) {
    const config = {
      headers: {
        'content-type': 'application/json',
        'authorization': localStorage.getItem('token')
      }
    }
    return fetch(backend_url + '/users/' + userId + '/subscriptions', config)
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

  static refresh() {
    return fetch(backend_url + '/refresh', {
      method: 'GET',
      headers: {
        'content-type': 'application/json',
        'authorization': localStorage.getItem('token')
      }
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

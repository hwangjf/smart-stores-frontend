const backend_url = 'http://localhost:4000/api/v1'

export default class Adapter {
  static getUserSubscriptionsInfo(userId, subscriptionId) {
    const config = {
      method: 'GET',
      headers: {
        'content-type': 'application/json',
        'authorization': localStorage.getItem('token')
      }
    }
    return fetch(backend_url + '/users/' + userId + '/subscriptions/' + subscriptionId, config)
  }

  static setSubscriptionDate(userId, subscriptionId, date) {
    const config = {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'authorization': localStorage.getItem('token')
      },
      body: JSON.stringify({ date: date })
    }
    return fetch(backend_url + '/users/' + userId + '/subscriptions/' + subscriptionId + '/date', config)
  }

  static setSubscriptionCost(userId, subscriptionId, cost) {
    const config = {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'authorization': localStorage.getItem('token')
      },
      body: JSON.stringify({cost: cost})
    }
    return fetch(backend_url + '/users/' + userId + '/subscriptions/' + subscriptionId + '/cost', config)
  }

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
}

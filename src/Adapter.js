export default class Adapter {
  static isLoggedIn() {
    return !!localStorage.getItem('token')
  }

  static logout() {
    localStorage.removeItem('token');
  }

  static getKey() {
    return 1
    // return API_KEY
  }
}

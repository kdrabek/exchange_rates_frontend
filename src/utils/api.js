const BASE_API_URL = 'http://localhost';

class Api {
  
  getCurrentRates() {
    return this._fetch('GET', '/rates/rates');
  }

  getRatesForDate(date) {
    return this._fetch('GET', `/rates/rates/${date}`);
  }

  getRatesForCurrency(token, currency, days) {
    const url = `/rates/rates/${currency}/limit/${days}`;
    return this._fetch('GET', url, token);
  }

  getNotifications(token) {
    const url = `/notifications/${token}`;
    return this._fetch('GET', url, token);
  }
  
  deleteNotification(token, notificationId) {
    const url = `/notifications/${token}/${notificationId}`;
    return this._fetch('DELETE', url, token, notificationId).then(
      response => { return {id: notificationId};}
    );
  }

  updateNotification(token, notification) {
    const url = `/notifications/${token}/${notification.id}`;
    return this._fetch('PUT', url, token, notification);
  }
  
  addNotification(token, notification) {
    const url = `/notifications/${token}`;
    return this._fetch('POST', url, token, notification).then(
      response => { return {id: response.id, ...notification};}
    );
  }

  getCurrencies(token) {
    const url = `/rates/currency`;
    return this._fetch('GET', url, token);
  }

  login(user) {
    const url = '/auth/login';
    return this._fetch('POST', url, null, user);
  }
  
  register(user) {
    const url = '/auth/register';
    return this._fetch('POST', url, null, user);
  }

  _prepareHeaders(token){
    let headers = new Headers();
    headers.append('Authorization', `Token ${token}`);
    return headers;
  }

  _fetch(method, url, token=null, body=null){
    let request = {method: method, mode: 'cors'}
    if (token)
      request.headers = this._prepareHeaders(token)
    if (body)
      request.body = JSON.stringify(body)
  
    return fetch(
      `${BASE_API_URL}${url}`, request
      ).then(
        response => response.json()
      ).catch(
        err => {return err;}
      );
  }

}

export default Api;

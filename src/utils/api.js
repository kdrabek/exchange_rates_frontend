const BASE_API_URL = 'http://localhost';

class Api {
  
  getCurrentRates() {
    const url = '/rates/rates';
    return fetch(`${BASE_API_URL}${url}`).then(response => {
      return response.json();
    }).catch(err => {return err;});
  }

  getRatesForDate(date) {
    const url = `/rates/rates/${date}`;
    return fetch(`${BASE_API_URL}${url}`).then(response => {
      return response.json();
    }).catch(err => {return err;});
  }

  getRatesForCurrency(token, currency, days) {
    const url = `/rates/rates/${currency}/limit/${days}`;
    let headers = new Headers();
    headers.append('Authorization', `Token ${token}`);

    return fetch(
      `${BASE_API_URL}${url}`,
      {
        method: 'GET',
        headers: headers,
        mode: 'cors'
      }
    ).then(response => {
      return response.json();
    }).catch(err => {return err;});
  }

  getNotifications(token) {
    const url = `/notifications/${token}`;
    let headers = new Headers();
    headers.append('Authorization', `Token ${token}`);

    return fetch(
      `${BASE_API_URL}${url}`,
      {
        method: 'GET',
        headers: headers,
        mode: 'cors'
      }
    ).then(response => {
      return response.json();
    }).catch(err => {return err;});
  }
  
  deleteNotification(token, notificationId) {
    const url = `/notifications/${token}/${notificationId}`;
    let headers = new Headers();
    headers.append('Authorization', `Token ${token}`);

    return fetch(
      `${BASE_API_URL}${url}`,
      {
        method: 'DELETE',
        headers: headers,
        mode: 'cors'
      }
    ).then(response => {
      return response.json();
    }).catch(err => {return err;});
  }

  updateNotification(token, notification) {
    const url = `/notifications/${token}/${notification.id}`;
    let headers = new Headers();
    headers.append('Authorization', `Token ${token}`);

    return fetch(
      `${BASE_API_URL}${url}`,
      {
        method: 'PUT',
        headers: headers,
        mode: 'cors',
        body: JSON.stringify(notification)
      }
    ).then(response => {
      return response.json();
    }).catch(err => {return err;});
  }

  login(user) {
    const url = '/auth/login';
    return fetch(`${BASE_API_URL}${url}`, {
      method: 'POST',
      body: JSON.stringify(user)
    })
    .then(response => {
      return response.json().then(json => {
      if (!response.ok)
        return Promise.reject(json);
      return json;
      })
    })
  }
  
  register(user) {
    const url = '/auth/register';
    return fetch(`${BASE_API_URL}${url}`, {
      method: 'POST',
      body: JSON.stringify(user)
    })
    .then(response => {
      return response.json().then(json => {
      if (!response.ok)
        return Promise.reject(json);
      return json;
      })
    })
  }
}

export default Api;

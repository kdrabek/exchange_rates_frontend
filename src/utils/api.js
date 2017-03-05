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

  getRatesForCurrency(currency, days) {
    const url = `/rates/rates/${currency}/limit/${days}`;
    return fetch(`${BASE_API_URL}${url}`).then(response => {
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
}

export default Api;

import fetchMock from 'fetch-mock';
import Api, { BASE_API_URL } from './api';

const ratesApi = new Api();

describe('Rates Endpoint', () => {

  beforeAll(()=>{
    const date = '2017-03-28';

    const expectedResp = {
      table_date: "2017-03-28",
      rates: [{country: "SDR (MFW)", currency: "XDR", name: "SDR (MFW)", rate: "5.3395"}] 
    };
    const ratesForCurrencyResp = {
      limit: "1",
      rates: [{
        currency: "USD",
        country: "Stany Zjednoczone",
        name: "dolar amerykański",
        rate: "3.9169",
        date: "2017-03-28",
        relative_change: "-0.0090"
      }]
    }
    fetchMock.get(`${BASE_API_URL}/rates/rates`, expectedResp);
    fetchMock.get(`${BASE_API_URL}/rates/rates/${date}`, expectedResp);
    fetchMock.get(`${BASE_API_URL}/rates/rates/USD/limit/1`, ratesForCurrencyResp);
  });

  it('(getCurrentRates) should use proper request params', (done) => {
    
    return ratesApi.getCurrentRates().then(resp => {
      const mockCallParams = fetchMock.lastCall()
      
      expect(mockCallParams[1]).toEqual({method: "GET", mode: "cors"});
      done();
    });
  });

  it('(getCurrentRates) should use return data in correct format', (done) => {
    
    return ratesApi.getCurrentRates().then(resp => {
      expect(resp).toHaveProperty('table_date');
      expect(resp).toHaveProperty('rates');

      expect(resp.rates.length).toBe(1);
      done();
    });

  });

  it('(getRatesForDate) should use proper request params', (done) => {
    
    return ratesApi.getRatesForDate('2017-03-28').then(resp => {
      const mockCallParams = fetchMock.lastCall()
      
      expect(mockCallParams[1]).toEqual({method: "GET", mode: "cors"});
      done();
    });
  });

  it('(getRatesForDate) should use return data in correct format', (done) => {
    
    return ratesApi.getRatesForDate('2017-03-28').then(resp => {
      expect(resp).toHaveProperty('table_date');
      expect(resp).toHaveProperty('rates');

      expect(resp.rates.length).toBe(1);
      done();
    });

  });

  it('(getRatesForCurrency) should use proper request params', (done) => {
    const token = 'token';
    return ratesApi.getRatesForCurrency(token, 'USD', '1').then(resp => {
      const mockCallParams = fetchMock.lastCall()
      expect(mockCallParams[1]).toEqual({
        method: "GET", 
        mode: "cors",
        headers: ratesApi._prepareHeaders(token)
      });
      done();
    });
  });

  it('(getRatesForCurrency) should use return data in correct format', (done) => {
    const token = 'token';
    return ratesApi.getRatesForCurrency(token, 'USD', '1').then(resp => {
      expect(resp).toHaveProperty('limit');
      expect(resp).toHaveProperty('rates');

      expect(resp.rates.length).toBe(1);
      done();
    });

  });

})


describe('Currencies Endpoint', () => {

  const token = 'token';

  beforeAll(()=>{
    const expectedResp = {
      currencies: [{
        code: "THB",
        name: "bat (Tajlandia)",
        country: "Tajlandia",
        table_type: "A"
      }]
    };
    fetchMock.get(`${BASE_API_URL}/rates/currency`, expectedResp);
  });

  it('(getCurrencies) should use proper request params', (done) => {
    
    return ratesApi.getCurrencies(token).then(resp => {
      const mockCallParams = fetchMock.lastCall()
      
      expect(mockCallParams[1]).toEqual({
        method: 'GET', mode: 'cors', headers: ratesApi._prepareHeaders(token)
      });
      done();
    });
  });

  it('(getCurrencies) should use return data in correct format', (done) => {
    
    return ratesApi.getCurrencies(token).then(resp => {
      expect(resp).toHaveProperty('currencies');
      expect(resp.currencies.length).toBe(1);
      done();
    });

  });

})


describe('Notifications Endpoint', () => {

  const token = 'token';
  const notificationId = 2;
  const newNotification =  {
      currency: "AUD",
      rate: "12.00",
      threshold: "BELOW",
      is_active: true
    };
  const updateNotification = {...newNotification, rate: "9.99", id: 2};

  beforeAll(()=>{
    const getResp = {
      notifications: [{
        id: 2, currency: "AUD", rate: "12.00", threshold: "BELOW", is_active: true
      }]
    };
    fetchMock.get(
      `${BASE_API_URL}/notifications/${token}`, getResp
    );
    fetchMock.post(
      `${BASE_API_URL}/notifications/${token}`, {id: 3, ...newNotification}
    );
    fetchMock.put(
      `${BASE_API_URL}/notifications/${token}/${notificationId}`, updateNotification
    );
    fetchMock.delete(
      `${BASE_API_URL}/notifications/${token}/${notificationId}`, {id: notificationId}
    );
  });

  it('(getNotifications) should use proper request params', (done) => {
    
    return ratesApi.getNotifications(token).then(resp => {
      const mockCallParams = fetchMock.lastCall()
      
      expect(mockCallParams[1]).toEqual({
        method: 'GET', mode: 'cors', headers: ratesApi._prepareHeaders(token)
      });
      done();
    });
  });

  it('(getNotifications) should use return data in correct format', (done) => {
    
    return ratesApi.getNotifications(token).then(resp => {
      expect(resp).toHaveProperty('notifications');
      expect(resp.notifications.length).toBe(1);
      done();
    });

  });

  it('(deleteNotification) should use proper request params', (done) => {
    
    return ratesApi.deleteNotification(token, notificationId).then(resp => {
      const mockCallParams = fetchMock.lastCall()
      
      expect(mockCallParams[1]).toEqual({
        method: 'DELETE', mode: 'cors', headers: ratesApi._prepareHeaders(token),
        body: JSON.stringify(notificationId)
      });
      done();
    });
  });

  it('(deleteNotifications) should use return data in correct format', (done) => {
    
    return ratesApi.deleteNotification(token, notificationId).then(resp => {
      expect(resp.id).toEqual(notificationId);
      done();
    });

  });

  it('(addNotification) should use proper request params', (done) => {
    
    return ratesApi.addNotification(token, newNotification).then(resp => {
      const mockCallParams = fetchMock.lastCall()
      
      expect(mockCallParams[1]).toEqual({
        method: 'POST', mode: 'cors', headers: ratesApi._prepareHeaders(token),
        body: JSON.stringify(newNotification)
      });
      done();
    });
  });

  it('(addNotifications) should use return data in correct format', (done) => {
    
    return ratesApi.addNotification(token, newNotification).then(resp => {
      expect(resp).toEqual({id: 3, ...newNotification});
      done();
    });

  });

  it('(updateNotification) should use proper request params', (done) => {
    return ratesApi.updateNotification(token, updateNotification).then(resp => {
      const mockCallParams = fetchMock.lastCall()
      
      expect(mockCallParams[1]).toEqual({
        method: 'PUT', mode: 'cors', headers: ratesApi._prepareHeaders(token),
        body: JSON.stringify(updateNotification)
      });
      done();
    });
  });

  it('(updateNotifications) should use return data in correct format', (done) => {
    
    return ratesApi.updateNotification(token, updateNotification).then(resp => {
      expect(resp).toEqual(updateNotification);
      done();
    });

  });

})


describe('Auth Endpoint', () => {

  const testUser = {email: 'test@gmail.com', password: 'password'};

  beforeAll(()=>{
    const expectedResp = {id: 1, token: 'token'};
    fetchMock.post(`${BASE_API_URL}/auth/login`, expectedResp);
    fetchMock.post(`${BASE_API_URL}/auth/register`, expectedResp);
  });

  it('(login) should use proper request params', (done) => {
    
    return ratesApi.login(testUser).then(resp => {
      const mockCallParams = fetchMock.lastCall()
      expect(mockCallParams[1]).toEqual({
        method: 'POST', mode: 'cors', body: JSON.stringify(testUser) 
      });
      done();
    });
  });

  it('(register) should use proper request params', (done) => {
    
    return ratesApi.register(testUser).then(resp => {
      const mockCallParams = fetchMock.lastCall()
      
      expect(mockCallParams[1]).toEqual({
        method: 'POST', mode: 'cors', body: JSON.stringify(testUser) 
      });
      done();
    });
  });

})

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
    
    return ratesApi.getRatesForCurrency('token', 'USD', '1').then(resp => {
      const mockCallParams = fetchMock.lastCall()
      expect(mockCallParams[1]).toEqual({
        method: "GET", 
        mode: "cors",
        headers: ratesApi._prepareHeaders('token')
      });
      done();
    });
  });

  it('(getRatesForCurrency) should use return data in correct format', (done) => {
    
    return ratesApi.getRatesForCurrency('token', 'USD', '1').then(resp => {
      expect(resp).toHaveProperty('limit');
      expect(resp).toHaveProperty('rates');

      expect(resp.rates.length).toBe(1);
      done();
    });

  });

})

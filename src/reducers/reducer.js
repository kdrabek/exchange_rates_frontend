import { combineReducers } from 'redux';

import { currencies } from './currenciesReducer';
import { reducer as formReducer } from 'redux-form';
import { rates, ratesDetails } from './ratesReducer';
import { notifications } from './notificationsReducer';
import { user } from './usersReducer';

export default combineReducers({
  rates,
  ratesDetails,
  user,
  notifications,
  currencies,
  form: formReducer
});

import React from 'react';
import ReactDOM from 'react-dom';
import { Router, IndexRoute, Route, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import store from './store/store';

import App from './components/App/App';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Notifications from './components/Notifications/Notifications';
import Details from './components/Details/Details';
import { isAuthenticated } from './utils/localStorage';

import './index.css';

function requireAuth(nextState, replace) {
  if (!isAuthenticated()) {
    replace({pathname: '/login'})
  }
}

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Home} />
        <Route path="login" component={Login} />
        <Route path="register" component={Register} />
        <Route path="notifications" component={Notifications} onEnter={requireAuth}/>
        <Route path="details/:currencyCode" component={Details} onEnter={requireAuth}/>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
);

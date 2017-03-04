import React from 'react';
import ReactDOM from 'react-dom';
import { Router, IndexRoute, Route, browserHistory } from 'react-router';

import App from './components/App/App';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Notifications from './components/Notifications/Notifications';
import Details from './components/Details/Details';

import './index.css';

ReactDOM.render(
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Home} />
        <Route path="login" component={Login} />
        <Route path="register" component={Register} />
        <Route path="notifications" component={Notifications} />
        <Route path="details/:currencyCode" component={Details} />
      </Route>
    </Router>,
  document.getElementById('root')
);

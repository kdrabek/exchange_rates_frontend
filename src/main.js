import React from 'react';
import { render } from 'react-dom';
import { Router, IndexRoute, Route, browserHistory } from 'react-router';

import './main.scss';
import App from './components/App';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import Notifications from './components/Notifications';

render(
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="login" component={Login} />
      <Route path="register" component={Register} />
      <Route path="notifications" component={Notifications} />
    </Route>
  </Router>,
  document.getElementById('app')
);

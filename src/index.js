import React from 'react';
import ReactDOM from 'react-dom';
import App from './app.jsx';
import './styles.css';
import store from './store.js';
import { Provider } from 'react-redux';
import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';

const mountNode = document.getElementById('app');

ReactDOM.render(
  <Router>
    <Switch>
      <Route path='/product_details/:prodId'>
          <Provider store={store}>
            <App />
          </Provider>
        </Route>
    </Switch>
  </Router>, mountNode
);

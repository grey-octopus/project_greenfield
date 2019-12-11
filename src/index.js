import React from 'react';
import ReactDOM from 'react-dom';
import App from './app.jsx';
import './styles.css';

import store from './store.js';
import { Provider } from 'react-redux';

const mountNode = document.getElementById('app');

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  mountNode
);

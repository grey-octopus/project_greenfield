import React from 'react';
import ReactDOM from 'react-dom';
import App from './app.jsx';
import './styles.css';

var mountNode = document.getElementById('app');

ReactDOM.render(<App />, document.getElementById('app'));

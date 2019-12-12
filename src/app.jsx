import React from 'react';
import Modal from 'react-modal';
import { useParams, Link, Route, Switch } from 'react-router-dom';

import ReviewBrowser from './reviews/review_containers/reviewBrowserContainer.js';

// React modal has to be bound to the app element:
Modal.setAppElement('#app');

const App = () => {
  return (
    <div>
      <ReviewBrowser />
    </div>
  );
};

export default App;

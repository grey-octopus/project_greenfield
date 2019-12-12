import React from 'react';
import OverviewContainer from './overview/containers/OverviewContainer.jsx'
import ProdOverviewContainer from './overview/containers/ProdOverviewContainer.jsx'
import Modal from 'react-modal';
import { useParams, Link, Route, Switch } from 'react-router-dom';

// React modal has to be bound to the app element:
Modal.setAppElement('#app');
        
const App = () => {
  const { prodId } = useParams();
  return <div>Product ID: {prodId}</div>;
};

export default App;

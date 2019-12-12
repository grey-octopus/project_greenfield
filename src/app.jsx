import React from 'react';
<<<<<<< HEAD
import OverviewContainer from './overview/containers/OverviewContainer.jsx'
import ProdOverviewContainer from './overview/containers/ProdOverviewContainer.jsx'
=======
import Modal from 'react-modal';
import { useParams, Link, Route, Switch } from 'react-router-dom';
>>>>>>> 85ca64bc0999c79eda164c7e7c299924f47b8750

// React modal has to be bound to the app element:
Modal.setAppElement('#app');
        
const App = () => {
  return (
    <div>
      <OverviewContainer />
      <ProdOverviewContainer />
    </div>
  );
};

export default App;

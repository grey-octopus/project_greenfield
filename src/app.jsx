import React from 'react';
import { 
  useParams, 
  Link,
  Route,
  Switch 
} from 'react-router-dom';

const App = () => {
  const { prodId } = useParams();
  return <div>Product ID: {prodId}</div>;

};

export default App;

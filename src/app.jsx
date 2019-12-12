import React from 'react';
import QuestionListContainer from './q_and_a/containers/QuestionListContainer.jsx'
import { 
  useParams, 
  Link,
  Route,
  Switch 
} from 'react-router-dom';

const App = () => {
  const { prodId } = useParams();
  return (
    <div>
      Product ID: {prodId}
      <QuestionListContainer />
    </div>);

};

export default App;

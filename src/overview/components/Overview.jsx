import React, { useEffect } from 'react';
import StarRatingContainer from '../containers/StarRatingContainer.jsx';
import ProdInfoContainer from '../containers/ProdInfoContainer.jsx';
import { useParams } from 'react-router-dom';

const Overview = props => {
  const { prodId } = useParams();
  useEffect(() => {
    props.fetchProductInfo(prodId);
  }, []);
  if (props.title) {
    return (
      <div id='overview'>
        <StarRatingContainer />
        <ProdInfoContainer />
      </div>
    );
  } else return <div>Loading...</div>;
};

export default Overview;

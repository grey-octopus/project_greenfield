import React, { useEffect } from 'react';
import StarRatingContainer from '../containers/StarRatingContainer.jsx';
import ProdOverviewContainer from '../containers/ProdOverviewContainer.jsx';
import { useParams } from 'react-router-dom';

const Overview = props => {
  const { prodId } = useParams();
  useEffect(() => {
    props.fetchProductInfo(prodId);
  });
  if (props.title) {
    return (
      <div id='overview'>
        <StarRatingContainer />
        <ProdOverviewContainer />
      </div>
    );
  } else return <div>Loading...</div>;
};

export default Overview;

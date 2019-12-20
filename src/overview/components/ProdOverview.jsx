import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom'
import DescriptionContainer from '../containers/DescriptionContainer.jsx';
import FeaturesContainer from '../containers/FeaturesContainer.jsx'

const ProdOverview = props => {
  const { prodId } = useParams()
  useEffect(() => { props.fetchProductOverview(prodId) }, [prodId]);
  if (props.description && props.slogan && props.features) {
    return (
      <div id='prod-overview'>
        <DescriptionContainer />
        <FeaturesContainer />
      </div>
    )
  } else {
    return <div id="description-hidden"></div>;
  }
};

export default ProdOverview;

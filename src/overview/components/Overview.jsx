/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import ProdInfoContainer from '../containers/ProdInfoContainer.jsx';
import { useParams } from 'react-router-dom';
import RatingContainer from '../containers/RatingContainer.jsx'
import StyleSelectorContainer from '../containers/StyleSelectorContainer.jsx'
import ProdOverviewContainer from '../containers/ProdOverviewContainer.jsx'
import ImageGalleryContainer from '../containers/ImageGalleryContainer.jsx'
import AddToCartContainer from '../containers/AddToCartContainer.jsx'

const Overview = props => {
  const { prodId } = useParams();
  useEffect(() => {
    props.fetchProductInfo(prodId);
    props.fetchStyles(prodId)
  }, []);
  if (props.title && props.styles) {
    return (
      <div id='overview'>
        <div id='overview-top'>
          <ImageGalleryContainer />
          <div id='prod-info-wrapper'>
            <RatingContainer />
            <ProdInfoContainer />
            <StyleSelectorContainer />
            <AddToCartContainer />
          </div>
        </div>
        <ProdOverviewContainer />
      </div>
    );
  } else return <div>Loading...</div>;
};

export default Overview;

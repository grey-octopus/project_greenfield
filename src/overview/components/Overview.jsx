/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import ProdInfoContainer from '../containers/ProdInfoContainer.jsx';
import { useParams } from 'react-router-dom';
import RatingContainer from '../containers/RatingContainer.jsx'
import StyleSelectorContainer from '../containers/StyleSelectorContainer.jsx'
import ProdOverviewContainer from '../containers/ProdOverviewContainer.jsx'
import ImageGalleryContainer from '../containers/ImageGalleryContainer.jsx'

const Overview = props => {
  const { prodId } = useParams();
  useEffect(() => {
    props.fetchProductInfo(prodId);
  }, []);
  if (props.title) {
    return (
      <div id='overview'>
        <ImageGalleryContainer />
        <RatingContainer />
        <ProdInfoContainer />
        <StyleSelectorContainer />
        <ProdOverviewContainer />
      </div>
    );
  } else return <div>Loading...</div>;
};

export default Overview;

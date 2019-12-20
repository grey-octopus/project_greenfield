/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ProdOverviewContainer from '../containers/ProdOverviewContainer.jsx'
import ImageGalleryContainer from '../containers/ImageGalleryContainer.jsx'
import ProdInfoWrapper from '../containers/ProdInfoWrapper.jsx'

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
          <ProdInfoWrapper />
        </div>
        <ProdOverviewContainer />
      </div>
    );
  } else return <div>Loading...</div>;
};

export default Overview;

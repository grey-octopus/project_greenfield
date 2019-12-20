import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import StarRating from './StarRating.jsx';
import ReadReviews from './ReadReviews.jsx';
import axios from 'axios';

const Rating = (props) => {
  const { prodId } = useParams();
  const [numOfReviews, setNumOfReviews] = useState(0);
  useEffect(() => {
    props.updateAverageRating(prodId);
    axios
      .get(`http://3.134.102.30/reviews/${prodId}/list?count=10000`)
      .then((data) => {
        setNumOfReviews(data.data.results.length);
      }, []);
  });
  if (props.averageRating && numOfReviews) {
    return (
      <div id="rating">
        <div id='share-buttons'>
          <div className="fb-share-button" data-href="https://developers.facebook.com/docs/plugins/" data-layout="button_count" data-size="small">
            <a href="https://twitter.com/share?ref_src=twsrc%5Etfw" className="twitter-share-button" data-text="This product rad!" data-hashtags="product" data-show-count="false"></a>
            &nbsp;
            <a target="_blank" href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fdevelopers.facebook.com%2Fdocs%2Fplugins%2F&amp;src=sdkpreparse" className="fb-xfbml-parse-ignore"></a></div>
            &nbsp;
            <a data-pin-do="buttonBookmark" href="https://www.pinterest.com/pin/create/button/"></a>
        </div>
        <StarRating prodId={prodId} averageRating={props.averageRating} />
        <ReadReviews numOfReviews={numOfReviews} />
      </div>
    );
  } else return <div id="star-rating"></div>;
};

export default Rating;

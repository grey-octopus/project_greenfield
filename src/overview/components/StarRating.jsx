import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

const StarRating = props => {
  const { prodId } = useParams();
  useEffect(() => {
    props.updateAverageRating(prodId);
  });
  if (props.averageRating) {
    const innerStyle = {
      width: `${(props.averageRating / 5) * 100}%`
    };
    return (
      <div className="star-rating">
        <div className="stars-outer far fa-star">
          <div className="stars-inner fas fa-star" style={innerStyle}></div>
        </div>
        <span>
          <a link="#ratings-reviews">Read all {props.numOfRatings} reviews</a>
        </span>
      </div>
    );
  } else return <div id="star-rating"></div>;
};

export default StarRating;

import React from 'react';

const StarRating = (props) => {
  if (props.averageRating) {
    const innerStyle = {
      width: `${(Number(props.averageRating) / 5) * 100}%`
    };
    return (
      <div className="stars-outer far fa-star">
        <div className="stars-inner fas fa-star" style={innerStyle}></div>
      </div>
    );
  } else return <div id="star-rating"></div>;
};

export default StarRating;

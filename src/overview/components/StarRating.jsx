import React from 'react';

const StarRating = (props) => {
  if (props.averageRating) {
    console.log('RATING: ', props.averageRating);
    console.log('CONVERTED: ', (Number(props.averageRating) / 5) * 100);
    const innerStyle = {
      width: `${(Number(props.averageRating) / 5) * 100}%`
    };
    return (
      <div className="single-stars-outer far fa-star">
        <div
          className="single-stars-inner fas fa-star"
          style={innerStyle}
        ></div>
      </div>
    );
  } else return <div id="star-rating"></div>;
};

export default StarRating;

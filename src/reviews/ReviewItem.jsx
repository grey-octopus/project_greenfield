import React, { useEffect } from 'react';

const ReviewItem = (props) => {
  return (
    <div className="review-item">
      <h3>{props.stats.reviewer_name}</h3>
      <p>{`date: ${props.stats.date}`}</p>
      <p>{`rating: ${props.stats.rating}`}</p>
      <p>{props.stats.summary}</p>
      <p>{props.stats.body}</p>
    </div>
  );
};

export default ReviewItem;

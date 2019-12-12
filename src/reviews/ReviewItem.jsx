import React, { useEffect } from 'react';

const ReviewItem = (props) => {
  console.log('REVIEW ITEM');
  console.log(props);
  return (
    <div>
      <h3>{props.stats.reviewer_name}</h3>
      <p>{props.stats.summary}</p>
      <p>{props.stats.body}</p>
    </div>
  );
};

export default ReviewItem;

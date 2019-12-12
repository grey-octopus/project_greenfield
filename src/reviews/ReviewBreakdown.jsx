import axios from 'axios';
import React, { useEffect } from 'react';

const ReviewBreakdown = (props) => {
  useEffect(() => {
    props.fetchReviewList({ prodId: 20, page: 1, count: 2 }); // dispatch action
  }, []);

  function handler() {
    console.log('handler');
  }

  if (props.reviews) {
    return (
      <div>
        <h3>Ratings and Reviews</h3>
        <p>Review Breakdown</p>
      </div>
    );
  } else return <div>Loading...</div>;
};

export default ReviewBreakdown;

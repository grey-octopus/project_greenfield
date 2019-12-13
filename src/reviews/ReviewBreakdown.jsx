import axios from 'axios';
import React, { useEffect } from 'react';
import { useParams, Link, Route, Switch } from 'react-router-dom';

const ReviewBreakdown = (props) => {
  const { prodId } = useParams();
  useEffect(() => {
    props.fetchReviewList({ prodId: prodId, page: 1, count: 2 }); // dispatch action
  }, []);

  function handler() {}

  if (props.reviews) {
    return (
      <div className="review-breakdown">
        <h3>Ratings and Reviews</h3>

        <div>
          <p>average review and stars</p>
        </div>
        <div>
          <h3>% of recommendations</h3>
          <p>5 stars</p>
          <div id="review-progress">
            <div id="review-bar"></div>
          </div>
          <p>4 stars</p>
          <div id="review-progress">
            <div id="review-bar"></div>
          </div>
          <p>3 stars</p>
          <div id="review-progress">
            <div id="review-bar"></div>
          </div>
          <p>2 stars</p>
          <div id="review-progress">
            <div id="review-bar"></div>
          </div>
          <p>1 stars</p>
          <div id="review-progress">
            <div id="review-bar"></div>
          </div>
        </div>
        <div>
          <p>star breakdown</p>
        </div>
        <div>
          <p>characteristics</p>
        </div>
      </div>
    );
  } else return <div>Loading...</div>;
};

export default ReviewBreakdown;

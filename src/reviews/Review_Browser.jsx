import axios from 'axios';
import React, { useEffect } from 'react';
import ReviewItem from './ReviewItem.jsx';
import ReviewModal from './modal.jsx';
import { useParams, Link, Route, Switch } from 'react-router-dom';
import publishReview from './apiHelpers.js';

let counter = 4;

const ReviewBrowser = (props) => {
  const { prodId } = useParams();
  useEffect(() => {
    props.fetchReviewList({ prodId: prodId, page: 1, count: 2 });
    props.fetchReviewMetadata({ prodId: prodId });
  }, []);

  function handleSubmitReview() {
    console.log('submit review');
    publishReview()
      .then((response) => {
        console.log('API response:');
        console.log(response);
      })
      .catch((err) => {
        console.log('POST ERROR', err);
      });
  }

  function handlePaginateReviewList() {
    console.log('paginate reviews');
    props.fetchReviewList({ prodId: prodId, page: 1, count: counter });
    counter = counter + 2;
  }

  if (props.reviews) {
    return (
      <div className="review-browser">
        <ReviewModal />
        <div>
          {props.reviews.map((item) => {
            return (
              <ReviewItem
                className="review-item"
                stats={item}
                key={item.review_id}
              />
            );
          })}
        </div>
        <button
          id="add-review-button"
          type="button"
          onClick={handleSubmitReview}
        >
          submit review
        </button>
        <button
          id="review-paginate-button"
          type="button"
          onClick={handlePaginateReviewList}
        >
          more reviews
        </button>
      </div>
    );
  } else return <div>Loading...</div>;
};

export default ReviewBrowser;

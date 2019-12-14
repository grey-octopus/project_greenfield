import axios from 'axios';
import React, { useEffect } from 'react';
import ReviewItem from './ReviewItem.jsx';
//import ReviewModal from './modal.jsx';
import ReviewModalContainer from './review_containers/ReviewModalContainer';
import { useParams, Link, Route, Switch } from 'react-router-dom';
import publishReview from './apiHelpers.js';

var counter = 4;

const ReviewBrowser = (props) => {
  const { prodId } = useParams();
  useEffect(() => {
    props.fetchReviewList({ prodId: prodId, page: 1, count: 2 });
    props.fetchReviewMetadata({ prodId: prodId });
  }, []);

  // function handleSubmitReview() {
  //   console.log('submit review');
  //   publishReview()
  //     .then((response) => {
  //       console.log('char', props.characteristics);
  //     })
  //     .catch((err) => {});
  // }

  function handlePaginateReviewList() {
    console.log('paginate reviews');
    props.fetchReviewList({ prodId: prodId, page: 1, count: counter });
    counter = counter + 2;
  }

  if (props.reviews) {
    return (
      <div className="review-browser">
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

        <ReviewModalContainer />

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

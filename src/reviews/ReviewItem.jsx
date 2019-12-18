import React, { useEffect } from 'react';
import { markReviewAsHelpful, reportReview } from './apiHelpers';
import StarRatingContainer from '../overview/containers/StarRatingContainer.jsx';
var moment = require('moment');

const ReviewItem = (props) => {
  const date = moment(props.stats.date).format('MMM Do YY');
  function handleClick(stats) {
    //console.log('handle card click', stats);
  }

  function markHelpful(stats) {
    //console.log(stats.review_id);
    markReviewAsHelpful(stats.review_id);
  }

  function report(stats) {
    //console.log(stats.review_id);
    reportReview(stats.review_id);
  }

  return (
    <div className="review-item">
      <div className="container">
        <div className="container-full">
          <div className="review-card-stars">
            <StarRatingContainer />
          </div>
          <div className="review-card-name-date">{`${props.stats.reviewer_name}, ${date}`}</div>
        </div>
        <h3 className="review-card-summary">{props.stats.summary}</h3>

        <p className="review-body-text ">{props.stats.body}</p>
      </div>
      <div className="helpful-report">
        <h3>Was this helpful?&nbsp;</h3>
        <h3
          className="click-text"
          onClick={(event) => {
            //console.log(props.stats);
            markHelpful(props.stats);
          }}
        >
          {`Yes (${props.stats.helpfulness})`}&nbsp;
        </h3>
        <h3
          className="click-text"
          onClick={(event) => {
            report(props.stats);
          }}
        >
          Report &nbsp;
        </h3>
      </div>
    </div>
  );
};

export default ReviewItem;

// <p>{`date: ${date}`}</p>

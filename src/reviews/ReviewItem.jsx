import React, { useEffect } from 'react';
import { markReviewAsHelpful, reportReview } from './apiHelpers';

const ReviewItem = (props) => {
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
      <div>
        <h3>{props.stats.reviewer_name}</h3>
        <p>{`date: ${props.stats.date}`}</p>
        <p>{`rating: ${props.stats.rating}`}</p>
        <p>{props.stats.summary}</p>
        <p>{props.stats.body}</p>
        <p>{`helpful?: ${props.stats.helpfulness}`}</p>
      </div>
      <div>
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

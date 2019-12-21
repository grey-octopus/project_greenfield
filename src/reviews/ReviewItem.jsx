import React, { useEffect, useState } from 'react';
import { markReviewAsHelpful, reportReview } from './apiHelpers';
//import StarRatingContainer from '../overview/containers/StarRatingContainer.jsx';
var moment = require('moment');

const ReviewItem = (props) => {
  const [markedHelpful, setMarkedHelpful] = useState({
    text: 'yes',
    leadUp: 'Was this helpful?'
  });
  const date = moment(props.stats.date).format('MMM Do YY');
  console.log('stats', props.stats);

  function handleClick(stats) {
    //console.log('handle card click', stats);
  }

  const StarRating = (stars) => {
    //1 star = 20
    //2 star = 40
    //3 star = 55
    //4 star = 75
    //5 star = 100

    if (stars === 1) stars = 20;
    if (stars === 2) stars = 40;
    if (stars === 3) stars = 55;
    if (stars === 4) stars = 75;
    if (stars === 5) stars = 100;

    const innerStyle = {
      width: `${stars}%`
    };
    return (
      <div className="stars-outer far">
        <div className="stars-inner fas" style={innerStyle}></div>
      </div>
    );
  };

  function markHelpful(stats) {
    //console.log(stats.review_id);
    if (markedHelpful.text === 'yes') {
      markReviewAsHelpful(stats.review_id);
      setMarkedHelpful({ text: 'Helpful: ' });
      props.stats.helpfulness++;
    }
  }

  function report(stats) {
    //console.log(stats.review_id);
    reportReview(stats.review_id);

    //next show banner indicating that it has been reported
  }

  return (
    <div className="review-item">
      <div className="container">
        <div className="container-full">
          <div className="review-card-stars">
            {StarRating(props.stats.rating)}
          </div>
          <div className="review-card-name-date">{`${props.stats.reviewer_name}, ${date}`}</div>
        </div>
        <h3 className="review-card-summary">{props.stats.summary}</h3>

        <p className="review-body-text ">{props.stats.body}</p>
      </div>
      <div className="helpful-report">
        <h3>{markedHelpful.leadUp}&nbsp;</h3>
        <h3
          className="click-text"
          onClick={(event) => {
            //console.log(props.stats);
            markHelpful(props.stats);
          }}
        >
          {`${markedHelpful.text} (${props.stats.helpfulness})`}
        </h3>
        <h3
          className="click-text"
          id="report-text"
          onClick={(event) => {
            report(props.stats);
          }}
        >
          &nbsp;Report &nbsp;
        </h3>
      </div>
    </div>
  );
};

export default ReviewItem;

// <p>{`date: ${date}`}</p>

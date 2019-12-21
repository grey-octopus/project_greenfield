import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams, Link, Route, Switch } from 'react-router-dom';
import StarRatingContainer from '../overview/containers/StarRatingContainer.jsx';
import CharacteristicSliders from './review_breakdown/ReviewBreakdownChars.jsx';

const ReviewBreakdown = (props) => {
  //console.log('props', props);
  let adjustedAverageReviewRating = props.averageRating;
  console.log('type of adjusted', adjustedAverageReviewRating);
  const { prodId } = useParams();
  const [percentReviews, setPercentReviews] = useState({
    1: { percentage: 0 },
    2: { percentage: 0 },
    3: { percentage: 0 },
    4: { percentage: 0 },
    5: { percentage: 0 }
  });

  useEffect(() => {
    props.fetchReviewList({ prodId: prodId, page: 1, count: 2 }); // dispatch action
  }, [prodId]);

  function clickHandler(filterNumber) {
    props.applyFilter({ stars: filterNumber });
  }

  function calculateBar() {
    if (props.ratings[1] !== undefined && percentReviews.done !== true) {
      let max = 0;
      let maxStar = 0;
      let mem = { 1: {}, 2: {}, 3: {}, 4: {}, 5: {}, done: true };

      for (let i in props.ratings) {
        if (props.ratings[i] > max) {
          max = props.ratings[i];
          maxStar = i;
        }
      }

      mem[maxStar].percentage = 100;
      mem[maxStar].num = max;

      for (let i in props.ratings) {
        if (i === maxStar) {
        } else {
          let temp = props.ratings[i];

          mem[i].percentage = Math.round((props.ratings[i] * 100) / max);
          mem[i].num = props.ratings[i];
        }
      }

      setPercentReviews(mem);
    } else {
      //loading
    }
  }

  function getPercentage(star) {
    let barSize = { width: `${percentReviews[star].percentage}%` };

    return barSize;
  }

  if (props.reviews) {
    if (props.ratings !== undefined) calculateBar();

    return (
      <div className="review-breakdown">
        <div>
          <h3>RATINGS AND REVIEWS</h3>
        </div>
        <div className="review-breakdown-star-block">
          <h2 id="review-breakdown-average">
            {typeof adjustedAverageReviewRating === 'string'
              ? adjustedAverageReviewRating.substring(0, 3)
              : ''}
          </h2>
          <span id="review-breakdown-average-stars2">
            <StarRatingContainer id="review-breakdown-average-stars" />
          </span>
        </div>

        <div>
          <h3>% of recommendations</h3>
          <div className="star-filter-selectors">
            <h3
              className="star-filter-text"
              onClick={(e) => {
                clickHandler(5);
              }}
            >
              5 stars
            </h3>
            <div className="review-progress">
              <div className="review-bar" style={getPercentage(5)}></div>
            </div>
          </div>
          <div className="star-filter-selectors">
            <h3
              className="star-filter-text"
              onClick={(e) => {
                clickHandler(4);
              }}
            >
              4 stars
            </h3>
            <div className="review-progress">
              <div className="review-bar" style={getPercentage(4)}></div>
            </div>
          </div>
          <div className="star-filter-selectors">
            <h3
              className="star-filter-text"
              onClick={(e) => {
                clickHandler(3);
              }}
            >
              3 stars
            </h3>

            <div className="review-progress">
              <div className="review-bar" style={getPercentage(3)}></div>
            </div>
          </div>
          <div className="star-filter-selectors">
            <h3
              className="star-filter-text"
              onClick={(e) => {
                clickHandler(2);
              }}
            >
              2 stars
            </h3>

            <div className="review-progress">
              <div className="review-bar" style={getPercentage(2)}></div>
            </div>
          </div>
          <div className="star-filter-selectors">
            <h3
              className="star-filter-text"
              onClick={(e) => {
                clickHandler(1);
              }}
            >
              1 &nbsp;stars
            </h3>
            <div className="review-progress">
              <div className="review-bar" style={getPercentage(1)}></div>
            </div>
          </div>
        </div>
        <div>
          <p>star breakdown</p>
        </div>
        <div>
          <p>characteristics</p>
          <div>
            <CharacteristicSliders characteristics={props.characteristics} />
          </div>
          <div></div>
        </div>
      </div>
    );
  } else return <div>Loading...</div>;
};

export default ReviewBreakdown;

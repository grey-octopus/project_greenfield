import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams, Link, Route, Switch } from 'react-router-dom';
import StarRatingContainer from '../overview/containers/StarRatingContainer.jsx';
import CharacteristicSliders from './review_breakdown/ReviewBreakdownChars.jsx';

const ReviewBreakdown = (props) => {
  //console.log('props', props);
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
    //console.log('calculate bar');

    if (props.ratings !== undefined && percentReviews.done !== true) {
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
          console.log(temp);

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
    //console.log(percentReviews);

    let barSize = { width: `${percentReviews[star].percentage}%` };

    return barSize;
  }

  if (props.reviews) {
    if (props.ratings !== undefined) calculateBar();
    //console.log('percents from state: ', percentReviews);
    return (
      <div className="review-breakdown">
        <h2>{props.averageRating}</h2>

        <div>
          <StarRatingContainer />
        </div>

        <div>
          <p>average review and stars</p>
        </div>
        <div>
          <h3>% of recommendations</h3>
          <h3
            onClick={(e) => {
              clickHandler(5);
            }}
          >
            5 stars
          </h3>
          <div id="review-progress">
            <div id="review-bar" style={getPercentage(5)}></div>
          </div>
          <h3
            onClick={(e) => {
              clickHandler(4);
            }}
          >
            4 stars
          </h3>
          <div id="review-progress">
            <div id="review-bar" style={getPercentage(4)}></div>
          </div>
          <h3
            onClick={(e) => {
              clickHandler(3);
            }}
          >
            3 stars
          </h3>
          <div id="review-progress">
            <div id="review-bar" style={getPercentage(3)}></div>
          </div>
          <h3
            onClick={(e) => {
              clickHandler(2);
            }}
          >
            2 stars
          </h3>
          <div id="review-progress">
            <div id="review-bar" style={getPercentage(2)}></div>
          </div>
          <h3
            onClick={(e) => {
              clickHandler(1);
            }}
          >
            1 stars
          </h3>
          <div id="review-progress">
            <div id="review-bar" style={getPercentage(1)}></div>
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

//StarRatingContainer className="breakdown-star-render"

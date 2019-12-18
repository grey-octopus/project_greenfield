import axios from "axios";
import React, { useEffect } from "react";
import { useParams, Link, Route, Switch } from "react-router-dom";
import StarRatingContainer from "../overview/containers/StarRatingContainer.jsx";
import CharacteristicSliders from "./review_breakdown/ReviewBreakdownChars.jsx";

const ReviewBreakdown = props => {
  const { prodId } = useParams();

  useEffect(() => {
    props.fetchReviewList({ prodId: prodId, page: 1, count: 2 }); // dispatch action
  }, [prodId]);

  function clickHandler(filterNumber) {
    props.applyFilter({ stars: filterNumber });
  }

  if (props.reviews) {
    return (
      <div className="review-breakdown">
        <h2>{props.averageRating}</h2>
        <div></div>

        <div>
          <p>average review and stars</p>
        </div>
        <div>
          <h3>% of recommendations</h3>
          <h3
            onClick={e => {
              clickHandler(5);
            }}
          >
            5 stars
          </h3>
          <div id="review-progress">
            <div id="review-bar"></div>
          </div>
          <h3
            onClick={e => {
              clickHandler(4);
            }}
          >
            4 stars
          </h3>
          <div id="review-progress">
            <div id="review-bar"></div>
          </div>
          <h3
            onClick={e => {
              clickHandler(3);
            }}
          >
            3 stars
          </h3>
          <div id="review-progress">
            <div id="review-bar"></div>
          </div>
          <h3
            onClick={e => {
              clickHandler(2);
            }}
          >
            2 stars
          </h3>
          <div id="review-progress">
            <div id="review-bar"></div>
          </div>
          <h3
            onClick={e => {
              clickHandler(1);
            }}
          >
            1 stars
          </h3>
          <div id="review-progress">
            <div id="review-bar"></div>
          </div>
        </div>
        <div>
          <p>star breakdown</p>
        </div>
        <div>
          <p>characteristics</p>
          <div>
            <CharacteristicSliders />
          </div>
          <div></div>
        </div>
      </div>
    );
  } else return <div>Loading...</div>;
};

export default ReviewBreakdown;

//StarRatingContainer className="breakdown-star-render"

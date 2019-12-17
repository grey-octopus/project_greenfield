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
  console.log('browser: review filter', props.reviewFilter);
  useEffect(() => {
    props.fetchReviewList({
      prodId: prodId,
      page: 1,
      count: 2,
      sort: 'newest'
    });
    props.fetchReviewMetadata({ prodId: prodId });
  }, []);

  function handlePaginateReviewList() {
    console.log('paginate reviews');
    props.fetchReviewList({
      prodId: prodId,
      page: 1,
      count: counter,
      sort: 'newest'
    });
    counter = counter + 2;
  }

  function handleSelectChange(e) {
    e.persist();
    console.log('filter', props.reviewFilter);
    const selection = e.target[e.target.options.selectedIndex].value;
    // console.log(e.target[e.target.options.selectedIndex].value);
    // console.log(e.target.options.selectedIndex);

    //e.options[e.selectedIndex].value;
    console.log('selection:', selection);

    props.fetchReviewList({
      prodId: prodId,
      page: 1,
      count: 2,
      sort: selection
    });
  }

  if (props.reviews) {
    return (
      <div className="review-browser">
        <div>
          <h3 className="inline-div">sort number of reviews by: &nbsp; </h3>

          <select
            className="inline-div"
            onChange={(event) => {
              handleSelectChange(event);
            }}
          >
            <option value="helpful">Helpful</option>
            <option value="newest">Newest</option>
            <option value="relevant">Relevant</option>
          </select>
        </div>
        <div>
          {props.reviews.map((item, index) => {
            // console.log(item);
            // console.log(props.reviewFilter);
            // if (item.rating === props.reviewFilter) {

            console.log('item rating: ', item.rating);
            console.log('props review filter: ', props.reviewFilter);

            if (props.reviewFilter === undefined) {
              return (
                <ReviewItem
                  className="review-item"
                  stats={item}
                  key={item.review_id}
                />
              );
            } else if (props.reviewFilter.stars === item.rating) {
              return (
                <ReviewItem
                  className="review-item"
                  stats={item}
                  key={item.review_id}
                />
              );
            }
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

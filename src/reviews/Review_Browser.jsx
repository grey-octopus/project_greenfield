import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ReviewItem from './ReviewItem.jsx';
//import ReviewModal from './modal.jsx';
import ReviewModalContainer from './review_containers/ReviewModalContainer';
import { useParams, Link, Route, Switch } from 'react-router-dom';
import publishReview from './apiHelpers.js';

const ReviewBrowser = (props) => {
  let checkStyle = { visibility: 'visible' };
  const { prodId } = useParams();
  const [pagination, setPagination] = useState({ page: 2 });
  const [pageButtonStyle, setStyle] = useState({ visibility: 'visible' });
  //const [pagination, setPagination] = useState({ page: 2 });

  useEffect(() => {
    props.fetchReviewList({
      prodId: prodId,
      page: 1,
      count: 2,
      sort: 'newest'
    });
    props.fetchReviewMetadata({ prodId: prodId });
  }, [prodId]);

  function handlePaginateReviewList() {
    let pageUp = pagination.page + 2;

    if (pagination.page >= props.reviews.length) {
      checkStyle = { visibility: 'hidden' };
      setStyle({ visibility: 'hidden' });
    } else {
      setPagination({ page: pageUp });
    }
  }

  function handleSelectChange(e) {
    e.persist();
    const selection = e.target[e.target.options.selectedIndex].value;
    props.fetchReviewList({
      prodId: prodId,
      page: 1,
      count: 2,
      sort: selection
    });
  }

  function generateReviews() {
    let filteredReviews = props.reviews.map((item, index) => {
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
    });

    return filteredReviews.slice(0, pagination.page);
  }

  if (props.reviews) {
    return (
      <div className="full-browser">
        <div>
          <div className="select-div">
            <h3 className="inline-div">sort number of reviews by: &nbsp; </h3>

            <select
              className="sort-select"
              onChange={(event) => {
                handleSelectChange(event);
              }}
            >
              <option value="helpful">Helpful</option>
              <option value="newest">Newest</option>
              <option value="relevant">Relevant</option>
            </select>
          </div>
        </div>
        <div className="review-browser">
          <div className="review-list">{generateReviews()}</div>

          <div className="browser-button-block">
            <button
              id="review-paginate-button"
              style={pageButtonStyle}
              type="button"
              onClick={handlePaginateReviewList}
            >
              MORE REVIEWS
            </button>
            <ReviewModalContainer />
          </div>
        </div>
      </div>
    );
  } else return <div>Loading...</div>;
};

export default ReviewBrowser;

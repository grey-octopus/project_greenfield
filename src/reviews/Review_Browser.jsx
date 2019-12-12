//import React from 'react';
import axios from 'axios';
import { Component } from 'react';
import React, { useEffect } from 'react';
import ReviewItem from './ReviewItem.jsx';

const ReviewBrowser = (props) => {
  useEffect(() => {
    props.fetchReviewList(1); // dispatch action
  }, []);

  if (props.reviews) {
    return (
      <div>
        {props.reviews.map((item) => {
          return <ReviewItem stats={item} key={item.review_id} />;
        })}
        <button type="button">more reviews</button>
      </div>
    );
  } else return <div>Loading...</div>;
};

export default ReviewBrowser;

//import React from 'react';
import axios from 'axios';
import { Component } from 'react';
import React, { useEffect } from 'react';
import ReviewItem from './ReviewItem.jsx';
import ReviewModal from './modal.jsx';

var counter = 4;

const ReviewBrowser = (props) => {
  useEffect(() => {
    props.fetchReviewList({ prodId: 20, page: 1, count: 2 }); // dispatch action
  }, []);

  function handleSubmitReview() {
    console.log('submit review');
    axios({
      method: 'post',
      url: `http://3.134.102.30/reviews/20`,
      data: {
        body:
          "Now is the winter of our discontent Made glorious summer by this sun of York; And all the clouds that lour'd upon our house In the deep bosom of the ocean buried. Now are our brows bound with victorious wreaths; Our bruised arms hung up for monuments;",
        rating: 4,
        name: 'jh',
        summary: 'Now is the winter of our discontent',
        recommend: true,
        email: 'jhaddock385@gmail.com',
        characteristics: { '62': 2, '63': 2, '64': 2, '65': 2 }
      }
    })
      .then(() => {
        console.log('then');
      })
      .catch((err) => {
        console.log('POST ERROR', err);
      });
  }

  function handlePaginateReviewList() {
    console.log('paginate reviews');
    props.fetchReviewList({ prodId: 20, page: 1, count: counter });
    counter = counter + 2;
  }

  if (props.reviews) {
    return (
      <div>
        <ReviewModal />
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
        <button
          id="add-review-button"
          type="button"
          onClick={handleSubmitReview}
        >
          submit review
        </button>
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

// axios
//       .get(`http://3.134.102.30/reviews/${prodId}/list`, {
//         params: {
//           page: page,
//           count: 3
//         }
//       })
//       .then(function(response) {
//         console.log(response.data);
//         return dispatch({
//           type: 'FETCH_REVIEW_LIST',
//           reviewsCount: response.data.count,
//           currentReviewPage: response.data.page,
//           reviews: response.data.results,
//           //this is almost certainly redudent but may be useful for testing prior to next merge
//           reviewProduct: response.data.product
//         });
//       })
//       .catch(function(error) {
//         console.log('api error');
//       });

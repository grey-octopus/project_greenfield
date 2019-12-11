//import React from 'react';
import axios from 'axios';
import { Component } from 'react';
import React, { useEffect } from 'react';

// const ReviewBrowser = ({ fetchReviewList, state }) => {
//   useEffect(() => {
//     const x = async () => {
//       await fetchReviewList(1);
//       console.log('testing state', state.fetchReviewReducer.reviews);
//     };
//   }); //props.prodId

//   return (
//     <div className="review-browser">
//       <h3>right column, list of reviews</h3>
//     </div>
//   );
// };

// const ReviewBrowser = ({fetchReviewList, state}) => {
//   useEffect(() => props.fetchReviewList(1)); // dispatch action
//   if (props.fetchReviewList) {
//     const test = 'yes';

//     return (
//       <div>
//         <h3>test</h3>
//       </div>
//     );
//   } else return <div>Loading...</div>;
// };

const ReviewBrowser = (props) => {
  useEffect(() => props.fetchReviewList(1)); // dispatch action

  if (props.reviews) {
    return (
      <div>
        <h3>right column, list of reviews</h3>
      </div>
    );
  } else return <div>Loading...</div>;
};

export default ReviewBrowser;

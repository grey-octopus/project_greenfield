import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import StarRating from './StarRating.jsx';
import ReadReviews from './ReadReviews.jsx';
import axios from 'axios';

const Rating = (props) => {
  const { prodId } = useParams();
  const [numOfReviews, setNumOfReviews] = useState(0);
  useEffect(() => {
    props.updateAverageRating(prodId);
    axios
      .get(`http://3.134.102.30/reviews/${prodId}/list?count=10000`)
      .then((data) => {
        setNumOfReviews(data.data.results.length);
      }, []);
  });
  if (props.averageRating && numOfReviews) {
    return (
      <div id="rating">
        <StarRating prodId={prodId} averageRating={props.averageRating} />
        <ReadReviews numOfReviews={numOfReviews} />
      </div>
    );
  } else return <div id="star-rating"></div>;
};

export default Rating;

// props.updateAverageRating(prodId);
// axios
//   .get(`http://3.134.102.30/reviews/${prodId}/list?count=10000`)
//   .then((data) => {
//     setNumOfReviews(data.data.results.length);
//   }, []);
// });

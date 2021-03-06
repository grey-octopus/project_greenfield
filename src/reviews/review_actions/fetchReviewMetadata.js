import axios from 'axios';

const fetchReviewMetadata = (options) => {
  return (dispatch) => {
    return axios
      .get(`http://3.134.102.30/reviews/${options.prodId}/meta`, {
        params: {
          product_id: options.prodId
        }
      })
      .then(function(response) {
        return dispatch({
          type: 'FETCH_REVIEW_METADATA',
          ratings: response.data.ratings,
          recommended: response.data.recommended,
          characteristics: response.data.characteristics
        });
      })
      .catch(function(error) {
        console.log('api error');
      });
  };
};

export default fetchReviewMetadata;

import axios from 'axios';

const fetchReviewList = (options) => {
  return (dispatch) => {
    return axios
      .get(`http://3.134.102.30/reviews/${options.prodId}/list`, {
        params: {
          page: options.page,
          count: 10000,
          sort: options.sort
        }
      })
      .then(function(response) {
        return dispatch({
          type: 'FETCH_REVIEW_LIST',
          reviewsCount: response.data.count,
          currentReviewPage: response.data.page,
          reviews: response.data.results,
          //this is probs redudent but may be useful for testing prior to next merge
          reviewProduct: response.data.product
        });
      })
      .catch(function(error) {
        console.log('api error');
      });
  };
};

export default fetchReviewList;

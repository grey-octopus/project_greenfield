import axios from 'axios';

const fetchReviewList = (options) => {
  console.log('fetchReviewList');
  return (dispatch) => {
    return axios
      .get(`http://3.134.102.30/reviews/${options.prodId}/list`, {
        params: {
          page: options.page,
          count: options.count
        }
      })
      .then(function(response) {
        console.log(response.data);
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

// axios
// .get(`http://3.134.102.30/reviews/${prodId}/list`)
// .then((response) => {
//   console.log(response.data);
//   return dispatch({
//     type: 'FETCH_REVIEW_LIST',
//     reviewsCount: response.data.count,
//     currentReviewPage: response.data.page,
//     reviews: response.data.results,
//     //this is almost certainly redudent but may be useful for testing prior to next merge
//     reviewProduct: response.data.product
//   });
// })

export default fetchReviewList;

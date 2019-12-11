import axios from 'axios';

const fetchReviewList = (prodId) => {
  console.log('fetchReviewList');
  return (dispatch) => {
    return axios
      .get(`http://3.134.102.30/reviews/${prodId}/list`)
      .then((response) => {
        console.log(response.data);
        return dispatch({
          type: 'FETCH_REVIEW_LIST',
          reviewsCount: response.data.count,
          currentReviewPage: response.data.page,
          reviews: response.data.results,
          //this is almost certainly redudent but may be useful for testing prior to next merge
          reviewProduct: response.data.product
        });
      });
    //should I have a .catch here?
  };
};

export default fetchReviewList;

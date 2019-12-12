import axios from 'axios';

const fetchProductOvervew = prodId => {
  console.log('DISPATCHED')
  return dispatch => {
    return axios.get(`http://3.134.102.30/products/${prodId}`).then(data => {
      return dispatch({
        type: 'FETCH_PROD_OVERVIEW',
        slogan: data.data.slogan,
        description: data.data.description,
        features: data.data.features
      });
    });
  };
};

export default fetchProductOvervew;
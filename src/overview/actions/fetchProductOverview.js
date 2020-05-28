import axios from 'axios';
import API_URL from '../../../config';

const fetchProductOvervew = (prodId) => {
  return (dispatch) => {
    return axios.get(`${API_URL}products/${prodId}`).then((data) => {
      return dispatch({
        type: 'FETCH_PROD_OVERVIEW',
        slogan: data.data.slogan,
        description: data.data.description,
        features: data.data.features,
      });
    });
  };
};

export default fetchProductOvervew;

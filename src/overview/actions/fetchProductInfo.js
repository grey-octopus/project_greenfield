import axios from 'axios';
import API_URL from '../../../config';

const fetchProductInfo = (prodId) => {
  return (dispatch) => {
    return axios.get(`${API_URL}products/${prodId}`).then((data) => {
      return dispatch({
        type: 'FETCH_PROD_INFO',
        title: data.data.name,
        category: data.data.category,
      });
    });
  };
};

export default fetchProductInfo;

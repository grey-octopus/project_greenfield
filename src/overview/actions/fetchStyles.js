import axios from 'axios';
import API_URL from '../../../config';

const fetchStyles = (prodId) => {
  return (dispatch) => {
    return axios
      .get(`${API_URL}products/${prodId}/styles`)
      .then(({ data }) => {
        return dispatch({
          type: 'FETCH_STYLES',
          styles: data.results,
        });
      })
      .catch((err) => console.log('ERROR: ', err));
  };
};

export default fetchStyles;

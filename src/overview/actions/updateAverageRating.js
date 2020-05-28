import axios from 'axios';
import { calculateAvgRating } from '../../helpers.js';
import API_URL from '../../../config';

const updateAverageRating = (prodId) => {
  return (dispatch) => {
    return axios.get(`${API_URL}reviews/${prodId}/meta`).then((meta) => {
      const ratings = meta.data.ratings;
      try {
        return dispatch({
          type: 'UPDATE_AVERAGE_RATING',
          payload: calculateAvgRating(ratings),
        });
      } catch {
        return dispatch({
          type: 'UPDATE_AVERAGE_RATING',
          numOfRatings: 0,
          payload: 0,
        });
      }
    });
  };
};

export default updateAverageRating;

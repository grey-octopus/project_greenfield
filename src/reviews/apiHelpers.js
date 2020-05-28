import axios from 'axios';
import API_URL from '../../config';

const publishReview = (content) => {
  return axios({
    method: 'post',
    url: `${API_URL}reviews/${content.prodId}`,
    data: {
      body: content.forms.body,
      rating: content.stars,
      name: content.forms.nickname,
      summary: content.forms.summary,
      recommend: content.forms.recommend === 'true' ? true : false,
      email: content.forms.email,
      characteristics: content.chars,
    },
  })
    .then((res) => {})
    .catch((err) => {
      console.log('api error');
    });
};

const markReviewAsHelpful = (id) => {
  return axios({
    method: 'PUT',
    url: `${API_URL}reviews/helpful/${id}`,
    data: {
      review_id: id,
    },
  })
    .then((res) => {})
    .catch((err) => {
      console.log('api error');
    });
};

const reportReview = (id) => {
  return axios({
    method: 'PUT',
    url: `${API_URL}reviews/report/${id}`,
    data: {
      review_id: id,
    },
  })
    .then((res) => {})
    .catch((err) => {
      console.log('api error');
    });
};

export { publishReview, markReviewAsHelpful, reportReview };

//module.exports.trackViews = trackViews;

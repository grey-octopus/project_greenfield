import axios from 'axios';

const publishReview = (content) => {
  return axios({
    method: 'post',
    url: `http://3.134.102.30/reviews/${content.prodId}`,
    data: {
      body: content.forms.body,
      rating: content.stars,
      name: content.forms.nickname,
      summary: content.forms.summary,
      recommend: content.forms.recommend === 'true' ? true : false,
      email: content.forms.email,
      characteristics: content.chars
    }
  })
    .then((res) => {})
    .catch((err) => {
      console.log('api error');
    });
};

const markReviewAsHelpful = (id) => {
  return axios({
    method: 'PUT',
    url: `http://3.134.102.30/reviews/helpful/${id}`,
    data: {
      review_id: id
    }
  })
    .then((res) => {})
    .catch((err) => {
      console.log('api error');
    });
};

const reportReview = (id) => {
  return axios({
    method: 'PUT',
    url: `http://3.134.102.30/reviews/report/${id}`,
    data: {
      review_id: id
    }
  })
    .then((res) => {})
    .catch((err) => {
      console.log('api error');
    });
};

export { publishReview, markReviewAsHelpful, reportReview };

//module.exports.trackViews = trackViews;

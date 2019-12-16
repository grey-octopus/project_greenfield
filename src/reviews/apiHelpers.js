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
    .then((res) => {
      console.log('response from api:');
      console.log(res);
    })
    .catch((err) => {
      console.log('api error');
    });
};

export default publishReview;

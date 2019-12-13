import axios from 'axios';

const publishReview = (options) => {
  //console.log('api helper: publishReview');
  return axios({
    method: 'post',
    url: `http://3.134.102.30/reviews/20`,
    data: {
      body:
        "Now is the winter of our discontent Made glorious summer by this sun of York; And all the clouds that lour'd upon our house In the deep bosom of the ocean buried. Now are our brows bound with victorious wreaths; Our bruised arms hung up for monuments;",
      rating: 4,
      name: 'jh',
      summary: 'Now is the winter of our discontent',
      recommend: true,
      email: 'jhaddock385@gmail.com',
      characteristics: { '62': 2, '63': 2, '64': 2, '65': 2 }
    }
  });
};

export default publishReview;

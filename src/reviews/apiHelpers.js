import axios from 'axios';
// import { useParams } from 'react-router-dom';
import React, { useEffect } from 'react';

const publishReview = (content) => {
  console.log('apihelpers: publishReview: ', content);
  let temp = Object.keys(content.chars);
  console.log('temp ', temp);
  console.log('stars', content.stars);

  let characteristics = {};
  for (let i = 0; i < temp.length; i++) {
    //characteristics[content.chars[temp[i]]] = 5;
    // console.log(content.chars[temp[i]].id);
    characteristics[content.chars[temp[i]].id] = 5;
    // console.log(characteristics);
  }
  // console.log(characteristics);

  // const { prodId } = useParams();
  console.log('prod', content.prodId);

  return axios({
    method: 'post',
    url: `http://3.134.102.30/reviews/10`,
    data: {
      body:
        "Now is the winter of our discontent Made glorious summer by this sun of York; And all the clouds that lour'd upon our house In the deep bosom of the ocean buried. Now are our brows bound with victorious wreaths; Our bruised arms hung up for monuments;",
      rating: content.stars,
      name: content.forms.nickname,
      summary: content.forms.summary,
      recommend: true,
      email: content.forms.email,
      characteristics: characteristics
    }
  }).then((res) => {
    console.log(res);
  });
};

export default publishReview;

// const publishReviewOld = (options) => {
//   //console.log('api helper: publishReview');
//   return axios({
//     method: 'post',
//     url: `http://3.134.102.30/reviews/20`,
//     data: {
//       body:
//         "Now is the winter of our discontent Made glorious summer by this sun of York; And all the clouds that lour'd upon our house In the deep bosom of the ocean buried. Now are our brows bound with victorious wreaths; Our bruised arms hung up for monuments;",
//       rating: 4,
//       name: 'jh',
//       summary: 'Now is the winter of our discontent',
//       recommend: true,
//       email: 'jhaddock385@gmail.com',
//       characteristics: { '62': 2, '63': 2, '64': 2, '65': 2 }
//     }
//   });
// };

// return axios({
//   method: 'POST',
//   url: `http://3.134.102.30/reviews/20`,
//   data: {
//     body: content.body,
//     rating: content.stars,
//     name: content.nickname,
//     summary: content.summary,
//     recommend: true,
//     email: 'jhaddock385@gmail.com',
//     characteristics: { '62': 2, '63': 2, '64': 2, '65': 2 }
//   }
// }).then((res) => {
//   console.log('response from api');
//   console.log(res);
// });

import axios from "axios";
export const GET_RELATED_PRODUCTS = "GET_RELATED_PRODUCTS";

export const getRelatedProducts = prodId => {
  return dispatch => {
    return new Promise((resolve, reject) => {
      // get related products
      axios
        .get(`http://3.134.102.30/products/${prodId}/related`)
        .catch(err => {
          reject(err);
        })
        .then(({ data }) => {
          // get assorted info
          let productInfoRequests = data.map(id => {
            return axios.get(`http://3.134.102.30/products/${id}`);
          });
          let productStyleRequests = data.map(id => {
            return axios.get(`http://3.134.102.30/products/${id}/styles`);
          });
          let productReviewRequests = data.map(id => {
            return axios.get(`http://3.134.102.30/reviews/${id}/meta`);
          });
          // resolve requests
          Promise.all([
            Promise.all(productInfoRequests),
            Promise.all(productStyleRequests),
            Promise.all(productReviewRequests)
          ])
            .catch(err => {
              console.log(err);
            })
            .then(requests => {
              // iterate over productInfoRequests
              let relatedProducts = [];
              requests[0].forEach(({ data }) => {
                relatedProducts.push({
                  id: data.id,
                  category: data.category,
                  name: data.name
                });
              });
              // iterate over productStyleRequests
              requests[1].forEach(({ data }, i) => {
                let [price, photoUrl] = getProductPrice(data);
                relatedProducts[i].price = price;
                relatedProducts[i].photoUrl = photoUrl;
              });
              // iterate over productReviewRequests
              requests[2].forEach(({ data }, i) => {
                let averageRating = calculateAverageRating(data.ratings);
                relatedProducts[i].rating = averageRating;
              });
              // return relatedProducts
              resolve(relatedProducts);
            });
        });
    })
      .catch(err => {
        console.log(err);
      })
      .then(relatedProducts => {
        dispatch({
          type: GET_RELATED_PRODUCTS,
          relatedProducts: relatedProducts
        });
      });
  };
};

export const getProductPrice = ({ results }) => {
  let lowestPrice = 0;
  let photoUrl = null;
  results.forEach(product => {
    if (product["default?"] === 1) {
      if (product["sale_price"] !== "0") {
        lowestPrice = product["sale_price"];
        photoUrl = product.photos[0].thumbnail_url;
      } else {
        lowestPrice = product["original_price"];
        photoUrl = product.photos[0].thumbnail_url;
      }
    }
  });
  return [lowestPrice, photoUrl];
};

export const calculateAverageRating = ratings => {
  let total = 0;
  let numberOfRatings = 0;
  for (let starRating in ratings) {
    total += Number(starRating) * ratings[starRating];
    numberOfRatings += ratings[starRating];
  }
  return total / numberOfRatings || null;
};

// getRelatedProducts(5)(value => {
// });

/* 
notes:
-will return null if there are no reveiws

*/

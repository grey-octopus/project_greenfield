import axios from "axios";
// TODO import alec's priceAvg function
export const GET_RELATED_PRODUCTS = "GET_RELATED_PRODUCTS";

export const getRelatedProducts = prodId => {
  // come back to me!
  return new Promise((resolve, reject) => {
    axios
      .get(`http://3.134.102.30/products/${prodId}/related`)
      .catch(err => {
        reject(err);
      })
      .then(({ data }) => {
        //   console.log("related", data);
        let productStyleCalls = data.map(id => {
          return axios.get(`http://3.134.102.30/products/${id}/styles`);
        });
        let productInfoCalls = data.map(id => {
          return axios.get(`http://3.134.102.30/products/${id}`);
        });

        Promise.all([
          Promise.all(productInfoCalls),
          Promise.all(productStyleCalls)
        ]).then(array => {
          let relatedProducts = [];
          array[0].forEach(({ data }) => {
            relatedProducts.push({
              id: data.id,
              category: data.category,
              name: data.name
            });
          });
          array[1].forEach(({ data }, i) => {
            let price = findPriceOfProductWithDefaultStyle(data);
            relatedProducts[i].price = price;
          });
          //   TODO: add rating function and property
          resolve({ type: GET_RELATED_PRODUCTS, products: relatedProducts });
        });
      });
  });
};

const findPriceOfProductWithDefaultStyle = ({ results }) => {
  let lowestPrice = 0;
  results.forEach(product => {
    if (product["default?"] === 1) {
      if (product["sale_price"] !== "0") {
        lowestPrice = product["sale_price"];
      } else {
        lowestPrice = product["original_price"];
      }
    }
  });
  // console.log(lowestPrice)
  return lowestPrice;
};

getRelatedProducts(2).then(result => {
  console.log(result);
});
/*
3) RATING => get product metadata and average ratings by adding up # of x_star reviews / num of reviews (GET reviews/:product_id/meta)
-category
-name
-price (need SKU for style
-rating
*/

import axios from "axios";

export const GET_RELATED_PRODUCTS = "GET_RELATED_PRODUCTS";

export const getRelatedProducts = () => {
  // return axios.get('3.134.102.30/')
};

/*
-get related product ids (GET /products/:product_id/related)

For each product id:
1) CATEGORY,NAME => get product info, take category/name from this call 
(GET /products/:id)
2) PRICE => get product styles, (results.styles)figure out which has a default prop of 1, not 0. (GET products/:product_id/styles)
	-if sale price is NOT 0, display sale price
	-else display regular price
3) RATING => get product metadata and average ratings by adding up # of x_star reviews / num of reviews (GET reviews/:product_id/meta)
-category
-name
-price (need SKU for style
-rating
*/

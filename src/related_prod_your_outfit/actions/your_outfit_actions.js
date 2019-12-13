import axios from "axios";
import { getProductPrice, calculateAverageRating } from "./related_products.js";

export const ADD_ITEM_TO_OUTFIT = "ADD_ITEM_TO_OUTFIT";
export const REMOVE_ITEM_FROM_OUTFIT = "REMOVE_ITEM_FROM_OUTFIT";
export const GET_OUTFIT = "GET_OUTFIT";

export const addItemToOutfit = id => {
  return dispatch => {
    // window.localStorage.setItem("myOutfit",)
    return { type: ADD_ITEM_TO_OUTFIT, itemId: id };
  };
};

export const removeItemFromOutfit = id => {
  return { type: REMOVE_ITEM_FROM_OUTFIT, itemId: id };
};

// completely self contained
export const getMyOutfit = () => {
  return dispatch => {
    return new Promise((resolve, reject) => {
      // 1) get outfits from localStorage
      let myOutfit = JSON.parse(window.localStorage.getItem("myOutfit"));
      // get assorted info for each outfit
      let myOutfitInfoRequests = myOutfit.map(id => {
        return axios.get(`http://3.134.102.30/products/${id}`);
      });
      let myOutfitStyleRequests = myOutfit.map(id => {
        return axios.get(`http://3.134.102.30/products/${id}/styles`);
      });
      let myOutfitReviewRequests = myOutfit.map(id => {
        return axios.get(`http://3.134.102.30/reviews/${id}/meta`);
      });
      // resolve requests
      Promise.all([
        Promise.all(myOutfitInfoRequests),
        Promise.all(myOutfitStyleRequests),
        Promise.all(myOutfitReviewRequests)
      ]).then(requests => {
        // iterate over productInfoRequests
        let myOutfitItems = [];
        requests[0].forEach(({ data }) => {
          myOutfitItems.push({
            id: data.id,
            category: data.category,
            name: data.name
          });
        });
        // iterate over productStyleRequests
        requests[1].forEach(({ data }, i) => {
          let [price, photoUrl] = getProductPrice(data);
          myOutfitItems[i].price = price;
          myOutfitItems[i].photoUrl = photoUrl;
        });
        // iterate over productReviewRequests
        requests[2].forEach(({ data }, i) => {
          let averageRating = calculateAverageRating(data.ratings);
          myOutfitItems[i].rating = averageRating;
        });
        // return myOutfitItems
        resolve(myOutfitItems);
      });
    }).then(outfit => {
      dispatch({
        type: GET_OUTFIT,
        outfit: outfit
      });
    });
  };
};

// getMyOutfit()(output => {
//   console.log(output);
// });

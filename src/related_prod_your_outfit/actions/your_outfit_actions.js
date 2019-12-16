import axios from "axios";
import { getProductPrice, calculateAverageRating } from "./related_products.js";

export const ADD_ITEM_TO_OUTFIT = "ADD_ITEM_TO_OUTFIT";
export const REMOVE_ITEM_FROM_OUTFIT = "REMOVE_ITEM_FROM_OUTFIT";
export const GET_OUTFIT = "GET_OUTFIT";

export const addItemToOutfit = item => {
  let currentOutfitIds = JSON.parse(window.localStorage.getItem("myOutfit"));
  if (!Array.isArray(currentOutfitIds)) {
    currentOutfitIds = [];
  }
  currentOutfitIds.push(item.id);
  window.localStorage.setItem("myOutfit", JSON.stringify(currentOutfitIds));
  // reducer will generate new store using entire item object
  return { type: ADD_ITEM_TO_OUTFIT, item: item };
};

export const removeItemFromOutfit = id => {
  let oldOutfitIds = JSON.parse(window.localStorage.getItem("myOutfit"));
  let location = oldOutfitIds.indexOf(id);
  oldOutfitIds.splice(location, 1);
  window.localStorage.setItem("myOutfit", JSON.stringify(oldOutfitIds));
  // reducer will generate find matching item from store and delete it
  return { type: REMOVE_ITEM_FROM_OUTFIT, id: id };
};

export const getMyOutfit = () => {
  return dispatch => {
    return (
      new Promise((resolve, reject) => {
        // get outfit id's from localStorage
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
        ])
          .catch(err => {
            console.log(err);
          })
          .then(requests => {
            // iterate over myOutiftInfoRequests
            let myOutfitItems = [];
            requests[0].forEach(({ data }) => {
              myOutfitItems.push({
                id: data.id,
                category: data.category,
                name: data.name
              });
            });

            // iterate over myOutfitStyleRequests
            requests[1].forEach(({ data }, i) => {
              let [price, photoUrl] = getProductPrice(data);
              myOutfitItems[i].price = price;
              myOutfitItems[i].photoUrl = photoUrl;
            });

            // iterate over myOutfitReviewRequests
            requests[2].forEach(({ data }, i) => {
              let averageRating = calculateAverageRating(data.ratings);
              myOutfitItems[i].rating = averageRating;
            });

            // return myOutfitItems
            resolve(myOutfitItems);
          });
      })
        .catch(err => {
          console.log(err);
        })
        // dispatch action
        .then(outfit => {
          dispatch({
            type: GET_OUTFIT,
            outfit: outfit
          });
        })
    );
  };
};

import { GET_OUTFIT } from "../actions/your_outfit_actions.js";
import { ADD_ITEM_TO_OUTFIT } from "../actions/your_outfit_actions.js";
import { REMOVE_ITEM_FROM_OUTFIT } from "../actions/your_outfit_actions.js";

export const myOutfitReducer = (state = [], action) => {
  switch (action.type) {
    case GET_OUTFIT:
      let newState = Object.assign([], action.outfit);
      console.log("reducer", newState);
      return newState;
    default:
      return state;
  }
};

import { GET_OUTFIT } from "../actions/your_outfit_actions.js";
import { ADD_ITEM_TO_OUTFIT } from "../actions/your_outfit_actions.js";
import { REMOVE_ITEM_FROM_OUTFIT } from "../actions/your_outfit_actions.js";

export const myOutfitReducer = (state = [], action) => {
  switch (action.type) {
    // takes in outfit from action, writes to state
    case GET_OUTFIT:
      let getOutfitState = Object.assign([], action.outfit);
      return getOutfitState;

    // takes in current myOutfit from` state, adds the item from action
    case ADD_ITEM_TO_OUTFIT:
      let addItemState = Object.assign([], state.myOutfit, action.item);
      return addItemState;

    // takes in current myOutfit from state, removes the item with given id
    case REMOVE_ITEM_FROM_OUTFIT:
      let removeItemState = Object.assign([], state.myOutfit);
      for (let item in removeItemState) {
        if (item.id === action.id) {
          removeItemState.splice(item, 1);
        }
      }
      return removeItemState;
    default:
      return state;
  }
};

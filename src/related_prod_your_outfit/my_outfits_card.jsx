import React from "react";
import {
  addItemToOutfit,
  removeItemFromOutfit
} from "./actions/your_outfit_actions.js";

const placeHolderImage = "/img/image-placeholder.png";

// will implement later
const addItem = (item, dispatch) => {
  dispatch(addItemToOutfit(item));
};
// will implement later
const removeItem = (id, dispatch) => {
  dispatch(removeItemFromOutfit(id));
};

const MyOutfitsCard = ({ id, category, name, price, photoUrl, dispatch }) => {
  const item = { id, category, name, price, photoUrl };
  return (
    <div className="relatedProducts card">
      <div className="cardImage">
        <img src={photoUrl || placeHolderImage} height="100px"></img>
      </div>
      <p className="cardText" style={{ fontSize: "10px" }}>
        {category}
        <p style={{ fontSize: "12px", wordBreak: "all" }}>
          <strong>{name}</strong>
        </p>
        {price}
      </p>
    </div>
  );
};

export default MyOutfitsCard;

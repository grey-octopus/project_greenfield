import React from "react";
import {
  addItemToOutfit,
  removeItemFromOutfit
} from "./actions/your_outfit_actions.js";

const addItem = (item, dispatch) => {
  dispatch(addItemToOutfit(item));
};

const removeItem = (id, dispatch) => {
  dispatch(removeItemFromOutfit(id));
};

const MyOutfitsCard = ({ id, category, name, price, photoUrl, dispatch }) => {
  const item = { id, category, name, price, photoUrl };
  console.log("ITEM", item);
  return (
    <div
      className="relatedProducts card"
      style={{ width: "150px", height: "250px", border: "1px solid black" }}
    >
      <div className="cardImage">
        <img src={photoUrl} height="100px"></img>
      </div>
      <p className="cardText">
        {category}
        <br />
        {name}
        <br />
        {price}
      </p>
    </div>
  );
};

export default MyOutfitsCard;

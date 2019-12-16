import React from "react";
import {
  addItemToOutfit,
  removeItemFromOutfit
} from "./actions/your_outfit_actions.js";
import { connect } from "react-redux";

const placeHolderImage = "/img/image-placeholder.png";

const MyOutfitsCard = ({
  id,
  category,
  name,
  price,
  photoUrl,
  rating,
  addItem,
  removeItem
}) => {
  const item = { id, category, name, price, photoUrl };
  return (
    <div className="relatedProducts card">
      <div className="cardImage">
        <img src={photoUrl || placeHolderImage} height="100px"></img>
      </div>
      <p className="cardText" style={{ fontSize: "10px" }}>
        {category}
      </p>
      <p style={{ fontSize: "12px", wordBreak: "all" }}>
        <strong>{name}</strong>
      </p>
      <p>
        {price}
        ITEM ID:{id}
      </p>
      <button
        onClick={() => {
          removeItem(id);
        }}
      >
        Remove item from favorites
      </button>
    </div>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    addItem: item => {
      dispatch(addItemToOutfit(item));
    },
    removeItem: id => {
      dispatch(removeItemFromOutfit(id));
    }
  };
};

export default connect(null, mapDispatchToProps)(MyOutfitsCard);

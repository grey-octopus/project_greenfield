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
      <button
        className="removeCardButton"
        onClick={() => {
          removeItem(id);
        }}
      >
        X
      </button>
      <div className="cardImage">
        <img src={photoUrl || placeHolderImage} height="100px"></img>
      </div>
      <br></br>
      <div className="cardTextContainer">
        <div className="cardText" style={{ wordBreak: "all" }}>
          {category}
          <br></br>
          <strong>{name}</strong>
          <br></br>${price}
          <br></br>
          {Number.isNaN(Number(rating)) || rating == 0 ? "No Reviews" : rating}
        </div>
      </div>
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

import React from "react";
import {
  addItemToOutfit,
  removeItemFromOutfit
} from "./actions/your_outfit_actions.js";
import StarRating from "../overview/components/StarRating";
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
        <img src={photoUrl || placeHolderImage}></img>
      </div>
      <br></br>
      <div className="cardTextContainer">
        <div className="cardText" style={{ wordBreak: "all" }}>
          <div className="category">{category}</div>

          <strong className="productTitle">{name}</strong>
          <div className="price">${price}</div>

          {Number.isNaN(Number(rating)) || rating == 0 ? (
            <div>No Reviews</div>
          ) : (
            <StarRating averageRating={rating} />
          )}
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

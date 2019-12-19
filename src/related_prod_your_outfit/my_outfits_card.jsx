import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import {
  addItemToOutfit,
  removeItemFromOutfit
} from "./actions/your_outfit_actions.js";
import StarRating from "../overview/components/StarRating";

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
        <img src={photoUrl || placeHolderImage} alt="my outfits image"></img>
      </div>
      <br></br>
      <Link to={`/product_details/${id}`}>
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
      </Link>
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

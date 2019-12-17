import React, { useState, useEffect } from "react";
import {
  addItemToOutfit,
  removeItemFromOutfit
} from "./actions/your_outfit_actions.js";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";

const placeHolderImage = "/img/image-placeholder.png";

const isOutfitInArray = (myOutfit, prodId) => {
  for (let product in myOutfit) {
    if (myOutfit[product].id === prodId) {
      return true;
    }
  }
  return false;
};

const MyOutfitsFirstCard = ({
  // price,
  photoUrl,
  rating,
  category,
  name,
  addItem,
  removeItem,
  myOutfit
}) => {
  let { prodId } = useParams();
  // const productLink = `http://3.134.102.30/products/${prodId}`;
  prodId = Number(prodId);
  // console.log("photoUrl");
  let [isInOutfit, setIsInOutfit] = useState(false);

  useEffect(() => {
    // check to see if prodId is present in array from local storage
    setIsInOutfit(isOutfitInArray(myOutfit, prodId));
  }, [myOutfit]);

  // refactor to add above comented params into item obj
  const item = { id: prodId, category, name };
  console.log("CAT", category);
  console.log("NAME", name);
  if (isInOutfit && myOutfit.length >= 1) {
    return (
      <div className="card">
        <button
          className="removeCardButton"
          onClick={() => {
            removeItem(prodId);
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

            {Number.isNaN(Number(rating)) || rating == 0
              ? "No Reviews"
              : rating}
          </div>
        </div>
      </div>
    );
  } else {
    console.log(photoUrl);
    return (
      <div className="card placeHolder">
        <div
          className="addProductButton"
          onClick={() => {
            addItem(item);
          }}
        >
          <h1 id="addToMyOutfitButton">+</h1>
          <br></br>
          <div className="cardText"></div>
          Add to My Outfit
        </div>
      </div>
    );
  }
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

export default connect(null, mapDispatchToProps)(MyOutfitsFirstCard);

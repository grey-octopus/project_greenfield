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
  // photoUrl,
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

  let [isInOutfit, setIsInOutfit] = useState(false);

  useEffect(() => {
    // check to see if prodId is present in array from local storage
    setIsInOutfit(isOutfitInArray(myOutfit, prodId));
  }, [myOutfit]);

  // refactor to add above comented params into item obj
  const item = { id: prodId, category, name };

  if (isInOutfit && myOutfit.length >= 1) {
    return (
      <div className="card relatedProducts">
        <button
          className="removeCardButton"
          onClick={() => {
            removeItem(prodId);
          }}
        >
          X
        </button>
        <div className="cardImage">
          <img src={placeHolderImage}></img>
        </div>
        <br></br>
        <div className="cardTextContainer">
          <div className="cardText" style={{ wordBreak: "all" }}>
            {category}
            <br></br>
            <strong>{name}</strong>

            <br></br>
            {rating ? "none" : rating}
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="card addProductButton placeHolder">
        <div className="cardImage">
          <img
            src="/img/plus-icon.png"
            onClick={() => {
              addItem(item);
            }}
          ></img>
          <br></br>
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

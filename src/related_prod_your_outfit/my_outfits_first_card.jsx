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
  // rating,
  category,
  name,
  addItem,
  removeItem,
  myOutfit
}) => {
  let { prodId } = useParams();
  const productLink = `http://3.134.102.30/products/${prodId}`;
  prodId = Number(prodId);

  let [isInOutfit, setIsInOutfit] = useState(false);

  useEffect(() => {
    // check to see if prodId is present in array from local storage
    setIsInOutfit(isOutfitInArray(myOutfit, prodId));
  }, [myOutfit]);

  // refactor to add above comented params into item obj
  const item = { id: prodId, category, name };

  return (
    <div className="relatedProducts card">
      <div className="cardImage">
        {/* refactor img src to have photoUrl */}
        <img src={placeHolderImage} height="100px"></img>
      </div>
      <p className="cardText" style={{ fontSize: "10px" }}>
        {category}
      </p>
      <p style={{ fontSize: "12px", wordBreak: "all" }}>
        <strong>{name}</strong>
      </p>
      <p>
        {/* {price} */}
        ITEM ID:{prodId}
      </p>
      {isInOutfit ? (
        <button
          onClick={() => {
            removeItem(prodId);
          }}
        >
          Remove from FAV
        </button>
      ) : (
        <button
          onClick={() => {
            addItem(item);
          }}
        >
          Add to FAV
        </button>
      )}
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

export default connect(null, mapDispatchToProps)(MyOutfitsFirstCard);

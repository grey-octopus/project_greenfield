import React, { useEffect } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import { getMyOutfit } from "./actions/your_outfit_actions.js";
import MyOutfitsCard from "./my_outfits_card.jsx";
import MyOutfitsFirstCard from "./my_outfits_first_card.jsx";

const MyOutfits = ({ myOutfit, currentItem, dispatch, currentItemRating }) => {
  let { prodId } = useParams();
  useEffect(() => {
    dispatch(getMyOutfit());
  }, []);

  return (
    <div className="myOutfitsContainer">
      My Outfits
      <div>
        <MyOutfitsFirstCard
          category={currentItem.category}
          name={currentItem.name}
          // price={currentItem.price}
          // photoUrl={currentItem.photoUrl}
          // key={currentItem.id}
          myOutfit={myOutfit}
          rating={currentItemRating}
          // dispatch={dispatch}
        />
        {myOutfit.length >= 1 ? (
          myOutfit.map(product => {
            if (product.id == prodId) {
              return;
            } else {
              return (
                <MyOutfitsCard
                  id={product.id}
                  category={product.category}
                  name={product.name}
                  price={product.price}
                  photoUrl={product.photoUrl}
                  key={product.id}
                  rating={product.rating}
                  dispatch={dispatch}
                />
              );
            }
          })
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    myOutfit: state.myOutfit,
    currentItem: state.fetchProductInfoReducer,
    currentItemRating: state.averageRatingReducer.averageRating
  };
};
export default connect(mapStateToProps, null)(MyOutfits);

import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getMyOutfit } from "./actions/your_outfit_actions.js";
import MyOutfitsCard from "./my_outfits_card.jsx";

const MyOutfits = ({ myOutfit, dispatch }) => {
  useEffect(() => {
    dispatch(getMyOutfit());
  }, []);
  return (
    <div className="myOutfitsContainer">
      My Outfits
      <div>
        {myOutfit.length >= 1 ? (
          myOutfit.map(product => {
            return (
              <MyOutfitsCard
                id={product.id}
                category={product.category}
                name={product.name}
                price={product.price}
                photoUrl={product.photoUrl}
                key={product.id}
                dispatch={dispatch}
              />
            );
          })
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return { myOutfit: state.myOutfit };
};
export default connect(mapStateToProps, null)(MyOutfits);

import React, { useEffect } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import { getMyOutfit } from "./actions/your_outfit_actions.js";
import MyOutfitsCard from "./my_outfits_card.jsx";

const MyOutfits = ({ myOutfit, dispatch }) => {
  useEffect(() => {
    dispatch(getMyOutfit());
  }, []);
  console.log("my outfits from container", myOutfit);
  return (
    <div className="MyOutfitsContainer">
      My Outfits
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
        <div>Loading</div>
      )}
    </div>
  );
};

const mapStateToProps = state => {
  return { myOutfit: state.myOutfit };
};
export default connect(mapStateToProps, null)(MyOutfits);

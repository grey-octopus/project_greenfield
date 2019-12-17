import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import { getMyOutfit } from "./actions/your_outfit_actions.js";
import ItemsCarousel from "react-items-carousel";
import MyOutfitsCard from "./my_outfits_card.jsx";
import MyOutfitsFirstCard from "./my_outfits_first_card.jsx";

const MyOutfits = ({
  myOutfit,
  currentItem,
  dispatch,
  currentItemRating,
  photoUrl
}) => {
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const chevronWidth = 40;
  let { prodId } = useParams();

  useEffect(() => {
    dispatch(getMyOutfit());
  }, [prodId]);

  return (
    <div className="myOutfitsContainer">
      <h2>MY OUTFITS</h2>
      <br></br>
      {/* there is an error coming from when the outfit contains the current item. ItemsCarousel always expects a node, and 
     because it must be using this.children... Need to make a parser so that the myOutfit array doesn't contain the current prod */}
      {myOutfit.length > 0 ? (
        <div style={{ padding: `0px ${chevronWidth}px` }}>
          <ItemsCarousel
            requestToChangeActive={setActiveItemIndex}
            activeItemIndex={activeItemIndex}
            numberOfCards={3.5}
            gutter={20}
            leftChevron={<button>{"<"}</button>}
            rightChevron={<button>{">"}</button>}
            outsideChevron
            chevronWidth={chevronWidth}
          >
            <MyOutfitsFirstCard
              category={currentItem.category}
              name={currentItem.name}
              // price={currentItem.price}
              photoUrl={photoUrl}
              // key={currentItem.id}
              myOutfit={myOutfit}
              rating={currentItemRating}
              // dispatch={dispatch}
            />
            {myOutfit.map(product => {
              if (product.id === Number(prodId)) {
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
            })}
          </ItemsCarousel>
        </div>
      ) : (
        <MyOutfitsFirstCard
          category={currentItem.category}
          name={currentItem.name}
          // price={currentItem.price}
          photoUrl={photoUrl}
          key={currentItem.id + "firstCard"}
          myOutfit={myOutfit}
          rating={currentItemRating}
          // dispatch={dispatch}
        />
      )}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    myOutfit: state.myOutfit,
    currentItem: state.fetchProductInfoReducer,
    currentItemRating: state.averageRatingReducer.averageRating,
    photoUrl: state.styles.styles
      ? state.styles.styles[state.styles.selected].photos[
          state.styles.selectedImage
        ].thumbnail_url
      : null
  };
};
export default connect(mapStateToProps, null)(MyOutfits);

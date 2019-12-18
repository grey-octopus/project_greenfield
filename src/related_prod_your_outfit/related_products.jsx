import React, { useEffect, useState } from "react";
import ReactModal from "react-modal";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";
import ItemsCarousel from "react-items-carousel";
import { getRelatedProducts } from "./actions/related_products.js";
import RelatedProductsCard from "./related_products_card.jsx";

const RelatedProducts = ({ relatedProducts, dispatch }) => {
  let { prodId } = useParams();
  const chevronWidth = 40;
  const productIdsObj = {};

  const [activeItemIndex, setActiveItemIndex] = useState(0);
  useEffect(() => {
    dispatch(getRelatedProducts(prodId));
  }, [prodId]);

  return (
    <div className="relatedProductsContainer">
      <h3>RELATED PRODUCTS</h3>

      {/* are there more than 1 items in the array? */}
      {relatedProducts.length >= 1 ? (
        <div style={{ padding: `10px ${chevronWidth}px` }}>
          <ItemsCarousel
            requestToChangeActive={setActiveItemIndex}
            activeItemIndex={activeItemIndex}
            numberOfCards={4}
            gutter={20}
            leftChevron={<button>{"<"}</button>}
            rightChevron={<button>{">"}</button>}
            outsideChevron
            chevronWidth={chevronWidth}
            showSlither={true}
          >
            {/* <p style={{ width: "400px", height: "400px" }}></p> */}
            {relatedProducts.map((product, i) => {
              if (productIdsObj[product.id] === true) {
                return;
              } else {
                productIdsObj[product.id] = true;
                return (
                  <RelatedProductsCard
                    id={product.id}
                    category={product.category}
                    name={product.name}
                    price={product.price}
                    photoUrl={product.photoUrl}
                    rating={product.rating}
                    key={product.id}
                  />
                );
              }
            })}
          </ItemsCarousel>
        </div>
      ) : (
        <div>
          {relatedProducts.map((product, i) => {
            if (productIdsObj[product.id] === true) {
              return;
            } else {
              productIdsObj[product.id] = true;
              return (
                <RelatedProductsCard
                  id={product.id}
                  relatedProdIndex={i}
                  category={product.category}
                  name={product.name}
                  price={product.price}
                  photoUrl={product.photoUrl}
                  rating={product.rating}
                  key={product.id}
                />
              );
            }
          })}
        </div>
      )}
    </div>
  );
};

const mapStateToProps = state => {
  return { relatedProducts: state.relatedProducts };
};

export default connect(mapStateToProps, null)(RelatedProducts);

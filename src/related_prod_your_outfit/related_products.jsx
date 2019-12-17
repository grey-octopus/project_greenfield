import React, { useEffect, useState } from "react";
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
      RELATED PRODUCTS
      <div>
        {relatedProducts.length >= 1 ? (
          <div style={{ padding: `10px ${chevronWidth}px` }}>
            <ItemsCarousel
              requestToChangeActive={setActiveItemIndex}
              activeItemIndex={activeItemIndex}
              numberOfCards={3.5}
              gutter={20}
              leftChevron={<button>{"<"}</button>}
              rightChevron={<button>{">"}</button>}
              outsideChevron
              chevronWidth={chevronWidth}
              showSlither={true}
            >
              {relatedProducts.map(product => {
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
          <div>loading</div>
        )}
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return { relatedProducts: state.relatedProducts };
};

export default connect(mapStateToProps, null)(RelatedProducts);

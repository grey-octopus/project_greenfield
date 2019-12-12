import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getRelatedProducts } from "./actions/related_products.js";
import RelatedProductsCard from "./related_products_card.jsx";

const RelatedProducts = ({ relatedProducts, dispatch }) => {
  useEffect(() => {
    dispatch(getRelatedProducts(3));
  }, [getRelatedProducts]);
  return (
    <div className="relatedProductsContainer">
      here
      {relatedProducts.length > 1 ? (
        relatedProducts.map(product => {
          return (
            <RelatedProductsCard
              id={product.id}
              category={product.category}
              name={product.name}
              price={product.price}
              photoUrl={product.photoUrl}
              key={product.id}
            />
          );
        })
      ) : (
        <div>nothing to show, yet!</div>
      )}
    </div>
  );
};

const mapStateToProps = state => {
  return { relatedProducts: state.relatedProducts };
};

export default connect(mapStateToProps, null)(RelatedProducts);

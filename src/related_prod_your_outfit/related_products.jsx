import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";
import { getRelatedProducts } from "./actions/related_products.js";
import RelatedProductsCard from "./related_products_card.jsx";

const RelatedProducts = ({ relatedProducts, dispatch }) => {
  let { prodId } = useParams();
  useEffect(() => {
    dispatch(getRelatedProducts(prodId));
  }, []);
  return (
    <div className="relatedProductsContainer">
      RELATED PRODUCTS
      {relatedProducts.length >= 1 ? (
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
        <div>Loading</div>
      )}
    </div>
  );
};

const mapStateToProps = state => {
  return { relatedProducts: state.relatedProducts };
};

export default connect(mapStateToProps, null)(RelatedProducts);

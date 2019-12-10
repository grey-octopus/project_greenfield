import React from "react";
import { connect } from "react-redux";
// import {} from "./actions.js";
import RelatedProductsCard from "./related_products_card.jsx";

const RelatedProducts = ({ relatedProducts }) => {
  return (
    <div className="relatedProductsContainer">
      {relatedProducts.map(product => {
        return (
          <RelatedProductsCard
            id={product.id}
            category={product.category}
            name={product.name}
            price={product.price}
          />
        );
      })}
    </div>
  );
};

const mapStateToProps = state => {
  return { relatedProducts: state.relatedProducts };
};

export default connect(mapStateToProps, null)(RelatedProducts);

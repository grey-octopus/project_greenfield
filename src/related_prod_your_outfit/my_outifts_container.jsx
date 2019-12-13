import React from "react";
import { connect } from "react-redux";

const MyOutfits = ({ relatedProducts, dispatch }) => {
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
  return { myOutfits: state.myOutfits };
};
export default connect(mapStateToProps, null)(MyOutfits);

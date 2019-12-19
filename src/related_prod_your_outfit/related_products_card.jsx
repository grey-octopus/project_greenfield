import React from "react";
import { Link } from "react-router-dom";
import StarRating from "../overview/components/StarRating";
import ActionButton from "./comparison_button.jsx";
const placeHolderImage = "/img/image-placeholder.png";
const RelatedProductsCard = ({
  id,
  category,
  name,
  price,
  photoUrl,
  rating,
  features
}) => {
  return (
    <div className="relatedProducts card">
      <ActionButton
        id={id}
        key={id + "actionbutton"}
        features={features}
        relatedProdName={name}
      />
      <div className="cardImage">
        <img src={photoUrl || placeHolderImage} alt="my outfits image"></img>
      </div>
      <br></br>
      <div className="cardTextContainer">
        <Link to={`/product_details/${id}`}>
          <div className="cardText" style={{ wordBreak: "all" }}>
            <div className="category">{category}</div>

            <strong className="productTitle">{name}</strong>
            <div className="price">${price}</div>

            {Number.isNaN(Number(rating)) || rating == 0 ? (
              "No Reviews"
            ) : (
              <StarRating averageRating={rating} />
            )}
          </div>
        </Link>
      </div>
    </div>
  );
};

export default RelatedProductsCard;

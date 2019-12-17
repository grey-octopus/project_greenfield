import React from "react";
import { Link } from "react-router-dom";
import StarRating from "../overview/components/StarRating";
const placeHolderImage = "/img/image-placeholder.png";
const RelatedProductsCard = ({
  id,
  category,
  name,
  price,
  photoUrl,
  rating
}) => {
  return (
    <Link to={`/product_details/${id}`}>
      <div className="relatedProducts card">
        <div className="cardImage">
          <img src={photoUrl || placeHolderImage}></img>
        </div>
        <br></br>
        <div className="cardTextContainer">
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
        </div>
      </div>
    </Link>
  );
};

export default RelatedProductsCard;

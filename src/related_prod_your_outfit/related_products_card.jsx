import React from "react";
import { Link } from "react-router-dom";
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
          <img src={photoUrl || placeHolderImage} height="100px"></img>
        </div>
        <br></br>
        <div className="cardTextContainer">
          <div className="cardText" style={{ wordBreak: "all" }}>
            {category}
            <br></br>
            <strong>{name}</strong>
            <br></br>${price}
            <br></br>
            {Number.isNaN(Number(rating)) || rating == 0
              ? "No Reviews"
              : rating}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default RelatedProductsCard;

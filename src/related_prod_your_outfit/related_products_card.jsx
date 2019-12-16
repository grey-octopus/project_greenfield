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
    <div className="relatedProducts card">
      <div className="cardImage">
        <img src={photoUrl || placeHolderImage} height="100px"></img>
      </div>
      <p className="cardText" style={{ fontSize: "10px" }}>
        {category}
      </p>
      <p style={{ fontSize: "12px", wordBreak: "all" }}>
        <Link to={`/product_details/${id}`}>
          <strong>{name}</strong>
        </Link>
      </p>
      <p>
        ${price}
        <br></br>
        rating:{rating || "no rating"}
      </p>
    </div>
  );
};

export default RelatedProductsCard;

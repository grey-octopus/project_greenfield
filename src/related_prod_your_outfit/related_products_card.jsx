import React from "react";

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
        <p style={{ fontSize: "12px", wordBreak: "all" }}>
          <strong>{name}</strong>
        </p>
        {price}
        <p>rating:{rating || "no rating"}</p>
      </p>
    </div>
  );
};

export default RelatedProductsCard;

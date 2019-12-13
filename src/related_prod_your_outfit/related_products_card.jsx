import React from "react";

const placeHolderImage = "/img/image-placeholder.png";
const RelatedProductsCard = ({ id, category, name, price, photoUrl }) => {
  return (
    <div
      className="relatedProducts card"
      style={{ width: "150px", height: "250px", border: "1px solid black" }}
    >
      <div className="cardImage">
        <img src={photoUrl || placeHolderImage} height="100px"></img>
      </div>
      <p className="cardText">
        {category}
        <br />
        {name}
        <br />
        {price}
      </p>
    </div>
  );
};

export default RelatedProductsCard;

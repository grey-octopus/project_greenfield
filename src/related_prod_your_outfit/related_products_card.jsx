import React from "react";

const RelatedProductsCard = ({ id, category, name, price, photoUrl }) => {
  return (
    <div>
      <p>
        <img src={photoUrl} width="40px"></img>
        id:{id}
        <br></br>category:{category}
        <br></br>name:{name}
        <br></br>price:{price}
      </p>
    </div>
  );
};

export default RelatedProductsCard;

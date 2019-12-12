import React from "react";

const RelatedProductsCard = ({ id, category, name, price, photoUrl }) => {
  return (
    <div>
      <p>
        <img src={photoUrl} width="40px"></img>
        id:{id}
        <br />
        category:{category}
        <br />
        name:{name}
        <br />
        price:{price}
      </p>
    </div>
  );
};

export default RelatedProductsCard;

import React from "react";
import RelatedProducts from "./related_prod_your_outfit/related_products.jsx";
import { Link, Route, Switch } from "react-router-dom";

const App = () => {
  const { prodId } = useParams();
  return <div>Product ID: {prodId}</div>;
};

export default App;

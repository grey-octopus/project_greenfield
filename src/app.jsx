import React from "react";
import Modal from "react-modal";
import RelatedProducts from "./related_prod_your_outfit/related_products.jsx";
import { useParams, Link, Route, Switch } from "react-router-dom";

// React modal has to be bound to the app element:
Modal.setAppElement("#app");

const App = () => {
  return (
    <div>
      <RelatedProducts />
    </div>
  );
};

export default App;

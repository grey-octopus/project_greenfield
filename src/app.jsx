import React from "react";
import OverviewContainer from "./overview/containers/OverviewContainer.jsx";
import ProdOverviewContainer from "./overview/containers/ProdOverviewContainer.jsx";
import RelatedProducts from "./related_prod_your_outfit/related_products.jsx";
import Modal from "react-modal";
import { useParams, Link, Route, Switch } from "react-router-dom";
import ReviewBrowser from "./reviews/review_containers/reviewBrowserContainer.js";
import ReviewBreakdown from "./reviews/review_containers/ReviewBreakdownContainer.js";

// React modal has to be bound to the app element:
Modal.setAppElement("#app");

const App = () => {
  return (
    <div>
      <div>
        <OverviewContainer />
      </div>
      <div>
        <ProdOverviewContainer />
      </div>
      <div>
        <RelatedProducts />
      </div>
      <div id='ratings-reviews'>
        <ReviewBreakdown className="review-breakdown" />
        <ReviewBrowser className="review-browser" />
      </div>
    </div>
  );
};

export default App;

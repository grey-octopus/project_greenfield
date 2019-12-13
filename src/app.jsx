import React, { useEffect, useState } from "react";
import OverviewContainer from "./overview/containers/OverviewContainer.jsx";
import ProdOverviewContainer from "./overview/containers/ProdOverviewContainer.jsx";
import RelatedProducts from "./related_prod_your_outfit/related_products.jsx";
import Modal from "react-modal";
import { useParams, Link, Route, Switch } from "react-router-dom";
import ReviewBrowser from "./reviews/review_containers/reviewBrowserContainer.js";
import ReviewBreakdown from "./reviews/review_containers/ReviewBreakdownContainer.js";
import axios from 'axios';
import polyfill from 'babel-polyfill'

// React modal has to be bound to the app element:
Modal.setAppElement("#app");

const App = () => {
  const { prodId } = useParams()
  const [prod, setProd] = useState(null)
  useEffect(() => {
    (async function output() {
      const res = await axios.get(`http://3.134.102.30/products/${prodId}`)
      setProd(res.data)
    }())
  })
  if (prod) {
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
  } else {
    return (
      <div>
        <img id="garf" src="/garf.png" width="30%" height="30%" />
        <h1 id="garf-text">404 NOT FOUND</h1>
      </div>
    )
  }
  
};

export default App;

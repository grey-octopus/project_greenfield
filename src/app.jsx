import React, { useEffect, useState } from 'react';
import OverviewContainer from './overview/containers/OverviewContainer.jsx';
import RelatedProducts from './related_prod_your_outfit/related_products.jsx';
import MyOutfits from './related_prod_your_outfit/my_outifts_container.jsx';
import Modal from 'react-modal';
import { useParams } from 'react-router-dom';
import ReviewBrowser from './reviews/review_containers/reviewBrowserContainer.js';
import ReviewBreakdown from './reviews/review_containers/ReviewBreakdownContainer.js';
import axios from 'axios';
import polyfill from 'babel-polyfill';
import QuestionList from './q_and_a/components/QuestionList';

// React modal has to be bound to the app element:
Modal.setAppElement('#app');

const App = () => {
  const { prodId } = useParams();
  const [dataToRender, setDataToRender] = useState(<div></div>);
  const [dark, setDark] = useState({ state: false, calls: 0 });

  useEffect(() => {
    if (
      window.matchMedia('(prefers-color-scheme: dark)').matches &&
      dark.calls === 0
    ) {
      document.documentElement.setAttribute('theme', 'dark');
      setDark({ state: !dark.state, calls: dark.calls + 1 });
    }

    if (dark.state && dark.calls > 0)
      document.documentElement.setAttribute('theme', 'dark');
    else if (dark.calls > 0)
      document.documentElement.setAttribute('theme', 'light');

    axios
      .get(`http://3.134.102.30/products/${prodId}`)
      .then(data => {
        setDataToRender(
          <div>
            <div id='navbar'>
              <div id='logo-text'>Shop.ly</div>
              <div
                id='theme-toggle'
                onClick={() => {
                  console.log(dark);
                  setDark({ state: !dark.state, calls: dark.calls + 1 });
                }}
              >
                <span className='toggle-icon'>
                  <i class='material-icons toggle'>nights_stay</i>
                </span>
                <span className='toggle-icon'>
                  <i
                    className={`fas fa-toggle-${dark.state ? 'on' : 'off'}`}
                  ></i>
                </span>
                <span className='toggle-icon'>
                  <i class='material-icons toggle'>wb_sunny</i>
                </span>
              </div>
            </div>
            <div id='app-inner'>
              <OverviewContainer />
              <RelatedProducts />
              <MyOutfits />
              <QuestionList />
              <div id='ratings-reviews'>
                <ReviewBreakdown className='review-breakdown' />
                <ReviewBrowser className='review-browser' />
              </div>
            </div>
          </div>
        );
      })
      .catch(err => {
        setDataToRender(
          <div>
            <div id='navbar'>
              <div id='logo-text'>Shop.ly</div>
            </div>
            <img id='garf' src='/garf.png' width='30%' height='30%' />
            <h1 id='garf-text'>404 NOT FOUND</h1>
          </div>
        );
      });
  }, [dark]);

  return dataToRender;
};

export default App;

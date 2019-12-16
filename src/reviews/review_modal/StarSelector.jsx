import Modal from 'react-modal';
import publishReview from '../apiHelpers.js';
import React, { useEffect, useState } from 'react';

const StarSelector = (props) => {
  function starClickHandler(num) {
    props.setNumOfStarsFilled(num);
  }

  function parseStar() {
    let stars = props.numOfStarsFilled;
    let output = 'def';
    switch (stars) {
      case 1:
        output = 'Poor';
        break;
      case 2:
        output = 'Fair';
        break;
      case 3:
        output = 'Average';
        break;
      case 4:
        output = 'Good';
        break;
      case 5:
        output = 'Great';
        break;
      default:
        output = '';
    }
    return output;
  }

  function stars() {
    const innerStyle = {
      width: `${0}%`
    };

    function determineFill(star) {
      if (star <= props.numOfStarsFilled) {
        return { width: `${100}%` };
      } else {
        return { width: `${0}%` };
      }
    }

    return (
      <div>
        <div
          className="single-stars-outer far fa-star"
          onClick={() => {
            console.log('star1');
            starClickHandler(1);
          }}
        >
          <div
            className="single-stars-inner fas fa-star"
            style={determineFill(1)}
            onClick={() => {
              console.log('star1');
            }}
          ></div>
        </div>
        <div
          className="single-stars-outer far fa-star"
          onClick={() => {
            console.log('star2');
            starClickHandler(2);
          }}
        >
          <div
            className="single-stars-inner fas fa-star"
            style={determineFill(2)}
            onClick={() => {
              console.log('star2');
            }}
          ></div>
        </div>
        <div
          className="single-stars-outer far fa-star"
          onClick={() => {
            console.log('star3');
            starClickHandler(3);
          }}
        >
          <div
            className="single-stars-inner fas fa-star"
            style={determineFill(3)}
            onClick={() => {
              console.log('star3');
            }}
          ></div>
        </div>
        <div
          className="single-stars-outer far fa-star"
          onClick={() => {
            console.log('star4');
            starClickHandler(4);
          }}
        >
          <div
            className="single-stars-inner fas fa-star"
            style={determineFill(4)}
            onClick={() => {
              console.log('star4');
            }}
          ></div>
        </div>
        <div
          className="single-stars-outer far fa-star"
          onClick={() => {
            console.log('star5');
            starClickHandler(5);
          }}
        >
          <div
            className="single-stars-inner fas fa-star"
            style={determineFill(5)}
            onClick={() => {
              console.log('star5');
            }}
          ></div>
        </div>
        <div className="inline-div">
          <h3>&nbsp; {parseStar()}</h3>
        </div>
      </div>
    );
  }

  return stars();
};

export default StarSelector;

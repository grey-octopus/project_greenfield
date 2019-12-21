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
            starClickHandler(1);
          }}
        >
          <div
            className="single-stars-inner fas fa-star"
            style={determineFill(1)}
            onClick={() => {}}
          ></div>
        </div>
        <div
          className="single-stars-outer far fa-star"
          onClick={() => {
            starClickHandler(2);
          }}
        >
          <div
            className="single-stars-inner fas fa-star"
            style={determineFill(2)}
            onClick={() => {}}
          ></div>
        </div>
        <div
          className="single-stars-outer far fa-star"
          onClick={() => {
            starClickHandler(3);
          }}
        >
          <div
            className="single-stars-inner fas fa-star"
            style={determineFill(3)}
            onClick={() => {}}
          ></div>
        </div>
        <div
          className="single-stars-outer far fa-star"
          onClick={() => {
            starClickHandler(4);
          }}
        >
          <div
            className="single-stars-inner fas fa-star"
            style={determineFill(4)}
            onClick={() => {}}
          ></div>
        </div>
        <div
          className="single-stars-outer far fa-star"
          onClick={() => {
            starClickHandler(5);
          }}
        >
          <div
            className="single-stars-inner fas fa-star"
            style={determineFill(5)}
            onClick={() => {}}
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

import React, { useEffect, useState } from 'react';

function CharacteristicSliders(props) {
  const test = [1, 2, 3];

  let charRender = [];
  for (let i in props.characteristics) {
    //console.log('props.:', props.characteristics[i].value);
    //console.log(i);
    let value = props.characteristics[i].value;
    let carrotLoc = Math.floor(value * 60);
    // console.log(value);
    // console.log(carrotLoc);

    //0 - 180
    //console.log(carrotLoc);
    let carrotStyle = { left: `${carrotLoc}px` };

    charRender.push(
      <div>
        <div>
          <h3>{i}</h3>
        </div>
        <div className="char-slider">
          <i className="fas fa-caret-down" style={carrotStyle}></i>

          <div className="char-slider-segment">&nbsp; </div>
          <div className="char-empty-slider-segment"></div>
          <div className="char-slider-segment">&nbsp;</div>
          <div className="char-empty-slider-segment"></div>
          <div className="char-slider-segment">&nbsp;</div>
        </div>
      </div>
    );
  }

  return charRender;
}

export default CharacteristicSliders;

//<div className="char-empty-slider-segment">&nbsp;</div>

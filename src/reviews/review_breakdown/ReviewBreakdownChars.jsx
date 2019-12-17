import React, { useEffect, useState } from 'react';

function CharacteristicSliders(props) {
  const test = [1, 2, 3];

  return test.map((c, index) => {
    return (
      <div>
        <div>
          <h3>{c}</h3>
        </div>
        <div className="char-slider">
          <i className="fas fa-caret-down"></i>

          <div className="char-slider-segment">&nbsp; </div>

          <div className="char-slider-segment">&nbsp;</div>

          <div className="char-slider-segment">&nbsp;</div>
        </div>
      </div>
    );
  });
}

export default CharacteristicSliders;

//<div className="char-empty-slider-segment">&nbsp;</div>

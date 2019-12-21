import React, { useEffect, useState } from 'react';

function CharacteristicSliders(props) {
  const test = [1, 2, 3];

  const options = {
    Size: {
      1: 'A size too small',
      2: '½ a size too small',
      3: 'Perfect',
      4: '½ a size too big',
      5: 'A size too wide'
    },
    Width: {
      1: 'Too narrow',
      2: 'Slightly narrow',
      3: 'Perfect',
      4: 'Slightly wide',
      5: 'Too wide'
    },
    Comfort: {
      1: 'Uncomfortable',
      2: 'Slightly uncomfortable',
      3: 'Ok',
      4: 'Comfortable',
      5: 'Perfect'
    },
    Quality: {
      1: 'Poor',
      2: 'Below average',
      3: 'What I expected',
      4: 'Pretty great',
      5: 'Perfect'
    },
    Length: {
      1: 'Runs Short',
      2: 'Runs slightly short',
      3: 'Perfect',
      4: 'Runs slightly long',
      5: 'Runs long'
    },
    Fit: {
      1: 'Runs tight',
      2: 'Runs slightly tight',
      3: 'Perfect',
      4: 'Runs slightly long',
      5: 'Runs long'
    }
  };

  console.log('chars', props.characteristics);
  let charRender = [];
  for (let i in props.characteristics) {
    //console.log('props.:', props.characteristics[i].value);
    //console.log(i);
    let value = props.characteristics[i].value;
    if (value === null) value = 2.5;
    let carrotLoc = (value * 100) / 5;
    // console.log(value);
    // console.log(carrotLoc);

    //0 - 180
    //console.log(carrotLoc);
    let carrotStyle = { left: `${carrotLoc}%`, top: '-9px' };

    charRender.push(
      <div className="full-slider">
        <div>
          <h3 style={{ fontSize: 0.9 + 'em' }}>{i}</h3>
        </div>
        <div className="char-slider">
          <i className="fas fa-caret-down" style={carrotStyle}></i>

          <div className="char-slider-segment">&nbsp; </div>
          <div className="char-empty-slider-segment"></div>
          <div className="char-slider-segment">&nbsp;</div>
          <div className="char-empty-slider-segment"></div>
          <div className="char-slider-segment">&nbsp;</div>
        </div>
        <div className="slider-labels">
          <div className="slider-label">{options[i][1]}</div>

          <div className="slider-label-end">{options[i][5]} </div>
        </div>
      </div>
    );
  }

  return charRender;
}

export default CharacteristicSliders;

//<div className="char-empty-slider-segment">&nbsp;</div>

import Modal from 'react-modal';
import publishReview from '../apiHelpers.js';
import React, { useEffect, useState } from 'react';

function Characteristics(props) {
  if (props.characteristics) {
    console.log(props.characteristics);
    let temp = Object.keys(props.characteristics);
    let chars = [];
    for (let i = 0; i < temp.length; i++) {
      chars.push({
        name: temp[i],
        id: props.characteristics[temp[i]].id,
        value: props.characteristics[temp[i]].value
      });
    }

    function handleInputChange(event) {
      event.persist();

      props.setCharRatings({
        ...props.userCharRatings,
        [props.characteristics[event.target.name].id]: event.target.value
      });
    }

    return chars.map((c, index) => {
      return (
        <div>
          <h3>{c.name}</h3>
          <input
            type="radio"
            name={c.name}
            value="1"
            onChange={handleInputChange}
          ></input>
          <input
            type="radio"
            name={c.name}
            value="2"
            onChange={handleInputChange}
          ></input>
          <input
            type="radio"
            name={c.name}
            value="3"
            onChange={handleInputChange}
          ></input>
          <input
            type="radio"
            name={c.name}
            value="4"
            onChange={handleInputChange}
          ></input>
          <input
            type="radio"
            name={c.name}
            value="5"
            onChange={handleInputChange}
          ></input>
        </div>
      );
    });
  } else {
    return <div>loading characteristics</div>;
  }
}

export default Characteristics;

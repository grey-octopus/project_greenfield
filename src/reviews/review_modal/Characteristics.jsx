import Modal from 'react-modal';
import publishReview from '../apiHelpers.js';
import React, { useEffect, useState } from 'react';

function Characteristics(props) {
  if (props.characteristics) {
    // console.log('characteristics', props.characteristics);
    // let obj = props.characteristics;
    // let chars = Object.keys(obj).map(function(key) {
    //   return [Number(key), obj[key]];
    // });

    let temp = Object.keys(props.characteristics);
    // console.log('temp', temp);
    let chars = [];

    for (let i = 0; i < temp.length; i++) {
      chars.push({
        name: temp[i],
        id: props.characteristics[temp[i]].id,
        value: props.characteristics[temp[i]].value
      });
    }

    // console.log('mapped characteristics', chars);

    return chars.map((c) => {
      // console.log(c);
      return (
        <div>
          <h3>{c.name}</h3>
          <input type="radio" name="gender" value="male"></input>
          <input type="radio" name="gender" value="male"></input>
          <input type="radio" name="gender" value="male"></input>
          <input type="radio" name="gender" value="male"></input>
          <input type="radio" name="gender" value="male"></input>
        </div>
      );
    });
  } else {
    return <div>loading characteristics</div>;
  }
}

export default Characteristics;

// function mapChars() {
//     if (props.characteristics) {
//       // console.log('characteristics', props.characteristics);
//       // let obj = props.characteristics;
//       // let chars = Object.keys(obj).map(function(key) {
//       //   return [Number(key), obj[key]];
//       // });

//       let temp = Object.keys(props.characteristics);
//       // console.log('temp', temp);
//       let chars = [];

//       for (let i = 0; i < temp.length; i++) {
//         chars.push({
//           name: temp[i],
//           id: props.characteristics[temp[i]].id,
//           value: props.characteristics[temp[i]].value
//         });
//       }

//       // console.log('mapped characteristics', chars);

//       return chars.map((c) => {
//         // console.log(c);
//         return (
//           <div>
//             <h3>{c.name}</h3>
//             <input type="radio" name="gender" value="male"></input>
//             <input type="radio" name="gender" value="male"></input>
//             <input type="radio" name="gender" value="male"></input>
//             <input type="radio" name="gender" value="male"></input>
//             <input type="radio" name="gender" value="male"></input>
//           </div>
//         );
//       });
//     } else {
//       return <div>loading characteristics</div>;
//     }
//   }

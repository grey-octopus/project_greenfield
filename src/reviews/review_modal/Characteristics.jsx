import Modal from 'react-modal';
import publishReview from '../apiHelpers.js';
import React, { useEffect, useState } from 'react';

function Characteristics(props) {
  const [ratingMeaning, setRatingMeaning] = useState({
    Size: 'none selected',
    Width: 'none selected',
    Comfort: 'none selected',
    Quality: 'none selected',
    Length: 'none selected',
    Fit: 'none selected'
  });
  if (props.characteristics) {
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

      const selection = options[event.target.name][event.target.value];

      setRatingMeaning({ ...ratingMeaning, [event.target.name]: selection });

      props.setCharRatings({
        ...props.userCharRatings,
        [props.characteristics[event.target.name].id]: event.target.value
      });
    }

    return chars.map((c, index) => {
      return (
        <div>
          <div className="char-labels">
            {/* <h3>{c.name}</h3> */}

            <label for={c.name}>
              {c.name}: &nbsp; {ratingMeaning[c.name]}
            </label>
          </div>
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

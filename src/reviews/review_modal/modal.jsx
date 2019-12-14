import Modal from 'react-modal';
import publishReview from '../apiHelpers.js';
import React, { useEffect, useState } from 'react';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)'
  }
};

const ReviewModal = (props) => {
  //this is happening before props are provided
  // let obj = props.characteristics;
  // // let chars = Object.keys(obj).map(function(key) {
  // //   return [Number(key), obj[key]];
  // // });

  // let chars = Object.keys(obj);

  // console.log(chars);

  // console.log('modal props', props.characteristics);
  var subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);
  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = '#f00';
    mapChars();
  }

  function closeModal() {
    setIsOpen(false);
  }

  function mapChars() {
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

  // data: {
  //   body:
  //     "Now is the winter of our discontent Made glorious summer by this sun of York; And all the clouds that lour'd upon our house In the deep bosom of the ocean buried. Now are our brows bound with victorious wreaths; Our bruised arms hung up for monuments;",
  //   rating: 4,
  //   name: 'jh',
  //   summary: 'Now is the winter of our discontent',
  //   recommend: true,
  //   email: 'jhaddock385@gmail.com',
  //   characteristics: { '62': 2, '63': 2, '64': 2, '65': 2 }
  // }

  function handlePublish() {
    publishReview();
  }

  function starClickHandler(num) {
    console.log('starClickHandler');

    //toggle the number of stars filled

    setNumOfStarsFilled(num);
  }

  //react hook allowing the storage of number of stars filled
  const [numOfStarsFilled, setNumOfStarsFilled] = useState(0);

  function stars() {
    const innerStyle = {
      width: `${0}%`
    };

    function determineFill(star) {
      if (star <= numOfStarsFilled) {
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
      </div>
    );
  }

  //0 star = 0
  //1 star = 20
  //2 star = 40
  //3 star = 55
  //4 star = 75
  //5 star = 100

  return (
    <div>
      <button onClick={openModal}>Post Review</button>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <h2 ref={(_subtitle) => (subtitle = _subtitle)}>
          Write your review about this product
        </h2>
        <form>
          <div>
            <div>{stars()}</div>
            <div></div>
          </div>
          <div>Do you recommend this product?</div>
          <div>Characteristics:</div>
          <div>{mapChars()}</div>

          <div>Summary:</div>
          <input />

          <div>Review Body:</div>

          <textarea rows="4" cols="50"></textarea>

          {/* <button>Submit image</button> */}

          <div>Nickname:</div>
          <input />

          <div>Email:</div>
          <input />

          <button>Submit!</button>

          <button onClick={closeModal}>close</button>
        </form>
      </Modal>
    </div>
  );
};

export default ReviewModal;

// return (
//   <div>
//     <div className="single-stars-outer far fa-star">
//       <div
//         className="single-stars-inner fas fa-star"
//         style={determineFill(1)}
//         onClick={starClickHandler(1)}
//       ></div>
//     </div>
//     <div className="single-stars-outer far fa-star">
//       <div
//         className="single-stars-inner fas fa-star"
//         style={determineFill(2)}
//         onClick={starClickHandler(2)}
//       ></div>
//     </div>
//     <div className="single-stars-outer far fa-star">
//       <div
//         className="single-stars-inner fas fa-star"
//         style={starClickHandler(3)}
//       ></div>
//     </div>
//     <div className="single-stars-outer far fa-star">
//       <div
//         className="single-stars-inner fas fa-star"
//         style={starClickHandler(4)}
//       ></div>
//     </div>
//     <div className="single-stars-outer far fa-star">
//       <div
//         className="single-stars-inner fas fa-star"
//         style={starClickHandler(5)}
//       ></div>
//     </div>
//   </div>
// );

// let allStars = [];

//     for (let s = 0; s < 5; s++) {
//       allStars.push(
//         <div>
//           <div className="single-stars-outer far fa-star">
//             <div
//               className="single-stars-inner fas fa-star"
//               style={determineFill(s)}
//               onClick={() => {
//                 starClickHandler(s);
//               }}
//             ></div>
//           </div>
//         </div>
//       );
//     }
//     console.log(allStars);
//     return allStars;

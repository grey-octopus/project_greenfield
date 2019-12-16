import React, { useEffect } from 'react';

const ReviewItem = (props) => {
  function handleClick(event) {
    console.log('handle card click', event);
  }

  return (
    <div className="review-item">
      <div>
        <h3>{props.stats.reviewer_name}</h3>
        <p>{`date: ${props.stats.date}`}</p>
        <p>{`rating: ${props.stats.rating}`}</p>
        <p>{props.stats.summary}</p>
        <p>{props.stats.body}</p>
        <p>{`helpful?: ${props.stats.helpfulness}`}</p>
      </div>
      <div>
        <h3>Was this helpful?&nbsp;</h3>
        <h3
          className="click-text"
          onClick={(event) => {
            //console.log(props.stats);
            handleClick(props.stats);
          }}
        >
          {`Yes (${props.stats.helpfulness})`}&nbsp;
        </h3>
        <h3 className="click-text">Report &nbsp;</h3>
      </div>
    </div>
  );
};

export default ReviewItem;

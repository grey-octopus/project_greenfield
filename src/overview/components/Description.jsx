import React from 'react';

const Description = props => {
  return (
    <div id="description">
      <h2>{props.slogan}</h2>
      <p>{props.description}</p>
    </div>
  );
};

export default Description;

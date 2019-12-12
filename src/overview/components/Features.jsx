import React from 'react';

// clean up the data
const fixFeatureData = data => {
  const { value, feature } = data
  // some data sets won't have a value, in which case
  // only return the feature
  if (value.toString() === 'null') return `${feature}`
  return `${value} ${feature}`
}

const Features = props => {
  return (
    <ul id='features'>
      {props.features.map(feature => {
        const displayData = fixFeatureData(feature)
        return <p className='feature'>{displayData}</p>
      })}
    </ul>
  )
}

export default Features
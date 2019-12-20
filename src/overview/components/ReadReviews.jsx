import React from 'react'

const ReadReviews = props => {
  return (
    <span>
      <a id='reviews-link'href="#ratings-reviews">Read all {props.numOfReviews} reviews</a>
    </span>
  )
}

export default ReadReviews
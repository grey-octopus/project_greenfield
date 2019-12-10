import React, { useEffect } from 'react'

const StarRating = props => {
  useEffect(() => props.updateAverageRating(props.prodId)) // dispatch action
  return (
    <div id="star-rating"></div>
  )
}

export default StarRating
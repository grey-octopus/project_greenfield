import React, { useEffect } from 'react'

const StarRating = props => {
  useEffect(() => props.updateAverageRating(props.prodId)) // dispatch action
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <div id="star-rating"></div>
    </Suspense>
  )
}

export default StarRating
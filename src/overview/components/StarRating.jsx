import React, { useEffect } from 'react'

const StarRating = props => {
  useEffect(() => props.updateAverageRating(props.prodId)) // dispatch action
  if (props.averageRating) {
    const innerStyle = {
      width: `${props.averageRating}%`
    }
    return (
      <div className="star-rating">
        <div className="stars-outer far fa-star">
          <div className="stars-inner fas fa-star" style={innerStyle}></div>
        </div>
      </div>
    )
  } else return <div>Loading...</div>
}

export default StarRating
import React, { useEffect } from 'react'

const StarRating = props => {
  useEffect(() => props.updateAverageRating(props.prodId)) // dispatch action
  if (props.averageRating) {
    const innerStyle = {
      width: `${(props.averageRating/5) * 100}%`
    }
    return (
      <div className="star-rating">
        <div className="stars-outer far fa-star">
          <div className="stars-inner fas fa-star" style={innerStyle}></div>
        </div>
        <span><a link="#ratings-reviews">Read all {props.numOfRatings} reviews</a></span>
      </div>
    )
  } else return <div>Loading...</div>
}

export default StarRating
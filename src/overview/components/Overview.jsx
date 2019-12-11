import React, { useEffect } from 'react'
import StarRatingContainer from '../containers/StarRatingContainer.jsx'
import ProdOverviewContainer from '../containers/ProdOverviewContainer.jsx'

const Overview = props => {
  useEffect(() => { props.fetchProductInfo(props.prodId) })
  if (props.title) {
    return (
      <div id="overview">
        <StarRatingContainer />
        <ProdOverviewContainer />
      </div>
    )
  } else return <div>Loading...</div>
}

export default Overview
import React from 'react'
import { connect } from 'react-redux'
import RatingContainer from './RatingContainer.jsx'
import ProdInfoContainer from './ProdInfoContainer.jsx'
import StyleSelectorContainer from './StyleSelectorContainer.jsx'
import AddToCartContainer from './AddToCartContainer.jsx'

const ProdInfoWrapper = props => {
  const id = props.isExpanded === false ? 'prod-info-wrapper' : 'prod-info-wrapper-hidden'

  return (
    <div id={id}>
      <RatingContainer />
      <ProdInfoContainer />
      <StyleSelectorContainer />
      <AddToCartContainer />
    </div>
  )
}

const mapStateToProps = state => {
  return {
    isExpanded: state.imageGallery.isExpanded
  }
}

export default connect(mapStateToProps, null)(ProdInfoWrapper)
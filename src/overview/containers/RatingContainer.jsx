import React from 'react'
import { connect } from 'react-redux'
import Rating from '../components/Rating.jsx'
import updateAverageRating from '../actions/updateAverageRating.js'

const mapStateToProps = state => {
  return { averageRating: state.averageRatingReducer.averageRating }
}

const mapDispatchToProps = dispatch => {
  return {
    updateAverageRating: prodId => dispatch(updateAverageRating(prodId))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Rating)
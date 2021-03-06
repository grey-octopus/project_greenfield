import { connect } from 'react-redux'
import StarRating from '../components/StarRating.jsx'
import updateAverageRating from '../actions/updateAverageRating.js'

const mapStateToProps = state => {
  return {
    averageRating: state.averageRatingReducer.averageRating,
    numOfRatings: state.averageRatingReducer.numOfRatings
  }
}

const mapDispatchToProps = dispatch => {
  return {
    updateAverageRating: prodId => dispatch(updateAverageRating(prodId))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(StarRating)
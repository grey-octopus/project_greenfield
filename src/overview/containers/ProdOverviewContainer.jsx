import { connect } from 'react-redux'
import ProdOverview from '../components/ProdOverview.jsx'
import fetchProductOverview from '../actions/fetchProductOverview.js'

const mapStateToProps = state => {
  return {
    slogan: state.fetchProductInfoReducer.slogan,
    description: state.fetchProductInfoReducer.description,
    features: state.fetchProductInfoReducer.features
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchProductOverview: prodId => dispatch(fetchProductOverview(prodId))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProdOverview)
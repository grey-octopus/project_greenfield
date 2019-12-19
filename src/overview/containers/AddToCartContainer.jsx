import AddToCart from '../components/AddToCart.jsx'
import { connect } from 'react-redux'
import fetchStyles from '../actions/fetchStyles.js'

const mapStateToProps = state => {
  return { 
    skus: state.styles.styles[state.styles.selected].skus,
    styles: state.styles.styles,
    selected: state.styles.selected
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchStyles: prodId => dispatch(fetchStyles(prodId))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddToCart)
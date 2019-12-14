import { connect } from 'react-redux'
import StyleSelect from '../components/StyleSelector.jsx'
import fetchStyles from '../actions/fetchStyles.js'

const mapStateToProps = state => {
  return {
    styles: state.styles.styles,
    selected: state.styles.selected
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchStyles: prodId => dispatch(fetchStyles(prodId))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(StyleSelect)
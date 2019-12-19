import { connect } from 'react-redux'
import fetchProductInfo from '../actions/fetchProductInfo.js'
import Overview from '../components/Overview.jsx'
import fetchStyles from '../actions/fetchStyles.js'

const mapStateToProps = state => {
  return {
    title: state.fetchProductInfoReducer.title,
    styles: state.styles.styles
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchProductInfo: (prodId) => dispatch(fetchProductInfo(prodId)),
    fetchStyles: (prodId) => dispatch(fetchStyles(prodId))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Overview)
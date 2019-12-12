import { connect } from 'react-redux'
import fetchProductInfo from '../actions/fetchProductInfo.js'
import Overview from '../components/Overview.jsx'

const mapStateToProps = state => {
  return {
    title: state.fetchProductInfoReducer.title
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchProductInfo: prodId => dispatch(fetchProductInfo(prodId))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Overview)
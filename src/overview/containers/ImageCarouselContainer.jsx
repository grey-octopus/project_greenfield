import { connect } from 'react-redux'
import ImageCarousel from '../components/ImageCarousel.jsx'
import updateSelectedImage from '../actions/updateSelectedImage.js'

const mapStateToProps = state => {
  return {
    styles: state.styles.styles,
    selected: state.styles.selected,
    position: state.styles.position
  }
}

const mapDispatchToProps = dispatch => {
  return {
    updateSelectedImage: index => dispatch(updateSelectedImage(index))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ImageCarousel)
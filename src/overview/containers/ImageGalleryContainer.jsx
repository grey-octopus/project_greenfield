import { connect } from 'react-redux'
import ImageGallery from '../components/ImageGallery'
import fetchStyles from '../actions/fetchStyles.js'

const mapStateToProps = state => {
  return {
    styles: state.styles.styles,
    selected: state.styles.selected,
    selectedImage: state.styles.selectedImage
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchStyles: prodId => dispatch(fetchStyles(prodId))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ImageGallery)
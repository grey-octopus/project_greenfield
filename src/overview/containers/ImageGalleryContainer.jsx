import { connect } from 'react-redux'
import ImageGallery from '../components/ImageGallery.jsx'
import fetchStyles from '../actions/fetchStyles.js'
import updatePosition from '../actions/updatePosition.js'

const mapStateToProps = state => {
  return {
    styles: state.styles.styles,
    selected: state.styles.selected,
    selectedImage: state.styles.selectedImage,
    position: state.styles.position
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchStyles: prodId => dispatch(fetchStyles(prodId)),
    updatePosition: (position, numOfItems, doIncrement) => dispatch(updatePosition(position, numOfItems, doIncrement))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ImageGallery)
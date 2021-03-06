import { connect } from 'react-redux'
import ImageCarousel from '../components/ImageCarousel.jsx'
import updateSelectedImage from '../actions/updateSelectedImage.js'
import updateQueue from '../actions/updateQueue.js'
import fetchStyles from '../actions/fetchStyles.js'

const mapStateToProps = state => {
  return {
    styles: state.styles.styles,
    selected: state.styles.selected,
    position: state.styles.position,
    queue: state.styles.queue,
    selectedImage: state.styles.selectedImage,
    isExpanded: state.imageGallery.isExpanded
  }
}

const mapDispatchToProps = dispatch => {
  return {
    updateSelectedImage: index => dispatch(updateSelectedImage(index)),
    updateQueue: queue => dispatch(updateQueue(queue)),
    fetchStyles: prodId => dispatch(fetchStyles(prodId))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ImageCarousel)
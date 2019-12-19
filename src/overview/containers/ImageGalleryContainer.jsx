import { connect } from 'react-redux'
import ImageGallery from '../components/ImageGallery.jsx'
import fetchStyles from '../actions/fetchStyles.js'
import updatePosition from '../actions/updatePosition.js'
import updateQueue from '../actions/updateQueue.js'
import updateSelectedImage from '../actions/updateSelectedImage.js'

const mapStateToProps = state => {
  return {
    styles: state.styles.styles,
    selected: state.styles.selected,
    selectedImage: state.styles.selectedImage,
    position: state.styles.position,
    queue: state.styles.queue,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchStyles: prodId => dispatch(fetchStyles(prodId)),
    updatePosition: (position, numOfItems, doIncrement) => dispatch(updatePosition(position, numOfItems, doIncrement)),
    updateQueue: queue => dispatch(updateQueue(queue)),
    updateSelectedImage: index => dispatch(updateSelectedImage(index))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ImageGallery)
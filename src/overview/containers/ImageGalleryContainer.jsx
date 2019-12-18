import { connect } from 'react-redux'
import ImageGallery from '../components/ImageGallery.jsx'
import fetchStyles from '../actions/fetchStyles.js'
import updatePosition from '../actions/updatePosition.js'
import updateQueue from '../actions/updateQueue.js'

const mapStateToProps = state => {
  console.log(state.styles.queue)
  return {
    styles: state.styles.styles,
    selected: state.styles.selected,
    selectedImage: state.styles.selectedImage,
    position: state.styles.position,
    queue: state.styles.queue
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchStyles: prodId => dispatch(fetchStyles(prodId)),
    updatePosition: (position, numOfItems, doIncrement) => dispatch(updatePosition(position, numOfItems, doIncrement)),
    updateQueue: queue => dispatch(updateQueue(queue))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ImageGallery)
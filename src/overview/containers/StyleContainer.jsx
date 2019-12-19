import { connect } from 'react-redux'
import Style from '../components/Style.jsx'
import updateSelected from '../actions/updateSelected.js' 
import updateQueue from '../actions/updateQueue.js'
import updateSelectedImage from '../actions/updateSelectedImage.js'

const mapStateToProps = state => {
  return {
    selected: state.styles.selected,
    styles: state.styles.styles
  }
}

const mapDispatchToProps = dispatch => {
  return {
    updateSelected: index => dispatch(updateSelected(index)),
    updateQueue: newQueue => dispatch(updateQueue(newQueue)),
    updateSelectedImage: index => dispatch(updateSelectedImage(index))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Style)
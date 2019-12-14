import { connect } from 'react-redux'
import Style from '../components/Style.jsx'
import updateSelected from '../actions/updateSelected.js' // MAKE THIS ACTION

const mapStateToProps = state => {
  return {
    selected: state.styles.selected,
    styles: state.styles.styles
  }
}

const mapDispatchToProps = dispatch => {
  return {
    updateSelected: index => dispatch(updateSelected(index))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Style)
import { connect } from 'react-redux'
import Price from '../components/Price.jsx'

const mapStateToProps = state => {
  return {
    selected: state.styles.selected,
    styles: state.styles.styles
  }
}

export default connect(mapStateToProps)(Price)
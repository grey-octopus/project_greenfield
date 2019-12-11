import ProdOverview from '../components/ProdOverview.jsx'
import { connect } from 'react-redux'

export default connect(state => ({ title: state.fetchProductInfoReducer.title, category: state.fetchProductInfoReducer.category }))(ProdOverview)
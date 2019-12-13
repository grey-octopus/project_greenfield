import { connect } from 'react-redux';
import Features from '../components/Features.jsx'

export default connect(state => ({ features: state.fetchProductInfoReducer.features }))(Features)
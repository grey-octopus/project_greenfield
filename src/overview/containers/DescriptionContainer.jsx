import { connect } from 'react-redux';
import Description from '../components/Description.jsx';

export default connect(state => ({ description: state.fetchProductInfoReducer.description, slogan: state.fetchProductInfoReducer.slogan }))(
  Description
);
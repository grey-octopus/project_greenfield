import ProdInfo from '../components/ProdInfo.jsx';
import { connect } from 'react-redux';

export default connect((state) => ({
  title: state.fetchProductInfoReducer.title,
  category: state.fetchProductInfoReducer.category
}))(ProdInfo);

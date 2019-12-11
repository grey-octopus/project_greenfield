import ProdOverview from '../components/ProdOverview.jsx';
import { connect } from 'react-redux';

export default connect((state) => ({
  title: state.title,
  category: state.category
}))(ProdOverview);

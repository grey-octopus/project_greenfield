import { connect } from 'react-redux';
import ReviewBrowser from '../Review_Browser.jsx';
import fetchReviewList from '../review_actions/fetchReviews.js';

const mapStateToProps = (state) => {
  return {
    averageRating: state.averageRating,
    prodId: state.prodId,
    reviewsCount: state.reviewsCount,
    currentReviewPage: state.currentReviewPage,
    reviews: state.reviews,
    reviewProduct: state.reviewProduct,
    state: state
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchReviewList: (prodId) => dispatch(fetchReviewList(prodId))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ReviewBrowser);

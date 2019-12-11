import { connect } from 'react-redux';
import ReviewBrowser from '../Review_Browser.jsx';
import fetchReviewList from '../review_actions/fetchReviews.js';

const mapStateToProps = (state) => {
  return {
    averageRating: state.averageRating,
    prodId: state.prodId,
    reviewsCount: state.fetchReviewReducer.reviewsCount,
    currentReviewPage: state.fetchReviewReducer.currentReviewPage,
    reviews: state.fetchReviewReducer.reviews,
    reviewProduct: state.fetchReviewReducer.reviewProduct
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchReviewList: (prodId) => dispatch(fetchReviewList(prodId))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ReviewBrowser);

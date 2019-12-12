import { connect } from 'react-redux';
import ReviewBreakdown from '../ReviewBreakdown.jsx';
import fetchReviewList from '../review_actions/fetchReviews.js';

const mapStateToProps = (state) => {
  return {
    averageRating: state.averageRatingReducer.averageRating,
    prodId: state.prodId, // deprecate this
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

export default connect(mapStateToProps, mapDispatchToProps)(ReviewBreakdown);

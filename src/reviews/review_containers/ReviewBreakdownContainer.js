import { connect } from 'react-redux';
import ReviewBreakdown from '../ReviewBreakdown.jsx';
import fetchReviewList from '../review_actions/fetchReviews.js';
import reviewFilter from '../review_actions/filterReviews.js';
import applyFilter from '../review_actions/filterReviews.js';

const mapStateToProps = (state) => {
  return {
    averageRating: state.averageRatingReducer.averageRating,
    prodId: state.prodId, // deprecate this
    reviewsCount: state.fetchReviewReducer.reviewsCount,
    currentReviewPage: state.fetchReviewReducer.currentReviewPage,
    reviews: state.fetchReviewReducer.reviews,
    reviewProduct: state.fetchReviewReducer.reviewProduct,
    //filter reducer
    reviewFilter: state.filterReviewsReducer.reviewFilter,
    //metadata
    ratings: state.fetchReviewMetadataReducer.ratings,
    recommended: state.fetchReviewMetadataReducer.recommended,
    characteristics: state.fetchReviewMetadataReducer.characteristics
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchReviewList: (prodId) => dispatch(fetchReviewList(prodId)),
    reviewFilter: () => dispatch(reviewFilter()),
    applyFilter: (prodId) => dispatch(applyFilter(prodId))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ReviewBreakdown);

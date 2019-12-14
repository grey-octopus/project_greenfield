import ReviewModal from '../modal.jsx';

import { connect } from 'react-redux';
import ReviewBrowser from '../Review_Browser.jsx';
import fetchReviewList from '../review_actions/fetchReviews.js';
import fetchReviewMetadata from '../review_actions/fetchReviewMetadata.js';

const mapStateToProps = (state) => {
  return {
    averageRating: state.averageRatingReducer.averageRating,
    prodId: state.prodId, // deprecate this
    //reviewlist reducer
    reviewsCount: state.fetchReviewReducer.reviewsCount,
    currentReviewPage: state.fetchReviewReducer.currentReviewPage,
    reviews: state.fetchReviewReducer.reviews,
    reviewProduct: state.fetchReviewReducer.reviewProduct,
    //metadata reducer:
    ratings: state.fetchReviewMetadataReducer.ratings,
    recommended: state.fetchReviewMetadataReducer.recommended,
    characteristics: state.fetchReviewMetadataReducer.characteristics
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchReviewList: (prodId) => dispatch(fetchReviewList(prodId)),
    fetchReviewMetadata: (prodId) => dispatch(fetchReviewMetadata(prodId))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ReviewModal);

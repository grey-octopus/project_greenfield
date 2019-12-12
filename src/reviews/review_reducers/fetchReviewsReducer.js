const fetchReviewReducer = (state = [], action) => {
  console.log('fetchReviewReducer');
  switch (action.type) {
    case 'FETCH_REVIEW_LIST':
      return {
        ...state,
        reviewsCount: action.reviewsCount,
        currentReviewPage: action.currentReviewPage,
        reviews: action.reviews,
        reviewProduct: action.reviewProduct
      };
    default:
      return state;
  }
};

export default fetchReviewReducer;

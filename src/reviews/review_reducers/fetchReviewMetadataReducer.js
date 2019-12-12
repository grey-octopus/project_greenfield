const fetchReviewMetadataReducer = (state = [], action) => {
  switch (action.type) {
    case 'FETCH_REVIEW_METADATA':
      return {
        ...state,
        ratings: action.ratings,
        recommended: action.recommended,
        characteristics: action.characteristics
      };
    default:
      return state;
  }
};

export default fetchReviewMetadataReducer;

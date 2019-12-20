const fetchReviewMetadataReducer = (state = [], action) => {
  switch (action.type) {
    case 'FETCH_REVIEW_METADATA':
      // if (action.ratings[1] === undefined) {
      //   action.ratings = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 };
      // }
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

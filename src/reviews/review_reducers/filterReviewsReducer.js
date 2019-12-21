const filterReviewsReducer = (state = [], action) => {
  switch (action.type) {
    case 'FILTER_REVIEWS':
      return {
        ...state,
        reviewFilter: action.starFilter
      };
    default:
      return state;
  }
};

export default filterReviewsReducer;

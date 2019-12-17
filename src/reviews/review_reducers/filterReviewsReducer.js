const filterReviewsReducer = (state = [], action) => {
  switch (action.type) {
    case 'FILTER_REVIEWS':
      console.log('filter reducer', action.starFilter);
      return {
        ...state,
        reviewFilter: action.starFilter
      };
    default:
      return state;
  }
};

export default filterReviewsReducer;

const averageRatingReducer = (state = [], action) => {
  switch (action.type) {
    case 'UPDATE_AVERAGE_RATING':
      return {...state, averageRating: action.payload}
    default:
      return state;
  }
}

export default averageRatingReducer
const fetchProductInfoReducer = (state = [], action) => {
  switch (action.type) {
    case 'FETCH_PROD_INFO':
      return {
        ...state,
        title: action.title,
        category: action.category,
      };
    case 'FETCH_PROD_OVERVIEW':
      return {
        ...state,
        description: action.description,
        slogan: action.slogan,
        features: action.features
      }
    default:
      return state;
  }
};

export default fetchProductInfoReducer;

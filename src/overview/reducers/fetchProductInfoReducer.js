const fetchProductInfoReducer = (state = [], action) => {
  switch (action.type) {
    case 'FETCH_PROD_INFO':
      return {
        ...state,
        title: action.title,
        description: action.description,
        category: action.category,
        slogan: action.slogan,
        features: action.features
      };
    default:
      return state;
  }
};

export default fetchProductInfoReducer;

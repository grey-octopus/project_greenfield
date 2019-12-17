const applyFilter = (stars) => {
  return {
    type: 'FILTER_REVIEWS',
    starFilter: stars
  };
};

export default applyFilter;

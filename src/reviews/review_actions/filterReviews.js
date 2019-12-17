const applyFilter = (stars) => {
  console.log('filter reviews action creator', stars);
  return {
    type: 'FILTER_REVIEWS',
    starFilter: stars
  };
};

export default applyFilter;

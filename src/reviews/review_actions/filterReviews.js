const filterReviews = (stars) => {
  console.log('filter reviews action creator');
  return {
    type: 'FILTER_REVIEWS',
    starFilter: stars
  };
};

export default filterReviews;

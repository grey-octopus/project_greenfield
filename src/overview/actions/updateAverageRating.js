import axios from "axios";

const updateAverageRating = prodId => {
  return dispatch => {
    return axios
      .get(`http://3.134.102.30/reviews/${prodId}/meta`)
      .then(meta => {
        const ratings = meta.data.ratings;
        const weightedTotal = Object.keys(ratings)
          .map(weight => {
            return Number(weight) * ratings[weight];
          })
          .reduce((acc, currentVal) => acc + currentVal);
        const numOfRatings = Object.values(ratings).reduce(
          (acc, currentVal) => acc + currentVal
        );
        const roundedToNearestQuarter = (
          Math.round((weightedTotal / numOfRatings) * 4) / 4
        ).toFixed(2);
        console.log(roundedToNearestQuarter);
        return dispatch({
          type: "UPDATE_AVERAGE_RATING",
          numOfRatings,
          payload: roundedToNearestQuarter
        });
      });
  };
};

export default updateAverageRating;

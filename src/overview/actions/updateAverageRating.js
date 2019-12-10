import axios from 'axios'

const updateAverageRating = (prodId) => {
  return dispatch => {
    return axios.get(`http://3.134.102.30/reviews/${prodId}/meta`)
      .then(meta => {
        const ratings = meta.data.ratings
        const weightedTotal = Object.keys(ratings).map(weight => {
          return Number(weight) * ratings[weight]
        }).reduce((acc, currentVal) => acc + currentVal)
        const numOfRatings = Object.values(ratings).reduce((acc, currentVal) => acc + currentVal)
        return dispatch({ type: 'UPDATE_AVERAGE_RATING', payload: weightedTotal / numOfRatings })
      })
  }
}

export default updateAverageRating
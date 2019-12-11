import axios from 'axios'

const updateAverageRating = (prodId) => {
  return dispatch => {
    return axios.get(`http://3.134.102.30/reviews/${prodId}/meta`)
      .then(meta => {
        const ratings = meta.data.ratings
        try {
          const weightedTotal = Object.keys(ratings).map(weight => {
            return Number(weight) * ratings[weight]
          }).reduce((acc, currentVal) => acc + currentVal)
  
          const numOfRatings = Object.values(ratings).reduce((acc, currentVal) => acc + currentVal)
  
          const roundedToNearestQuarter = (Math.round((weightedTotal / numOfRatings) * 4) / 4).toFixed(2)
  
          return dispatch({ type: 'UPDATE_AVERAGE_RATING', numOfRatings, payload: roundedToNearestQuarter })
        } catch {
          return dispatch({ type: 'UPDATE_AVERAGE_RATING', numOfRatings: 0, payload: 0})
        }
      })
  }
}

export default updateAverageRating
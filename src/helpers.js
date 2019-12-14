const calculateAvgRating = (ratings) => {
  const weightedTotal = Object.keys(ratings).map(weight => {
    return Number(weight) * ratings[weight]
  }).reduce((acc, currentVal) => acc + currentVal)

  const numOfRatings = Object.values(ratings).reduce((acc, currentVal) => acc + currentVal)

  const roundedToNearestQuarter = (Math.round((weightedTotal / numOfRatings) * 4) / 4).toFixed(2)

  return roundedToNearestQuarter
} 

export {calculateAvgRating}
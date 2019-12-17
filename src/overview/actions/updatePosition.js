const updatePosition = (position, numOfItems) => {
  console.log('TEST: ', position, numOfItems)
  const newPosition = position === numOfItems - 1 ? 0 : position + 1
  return {
    type: 'UPDATE_POS',
    newPosition
  }
}

export default updatePosition
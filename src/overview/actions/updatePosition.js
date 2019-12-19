const updatePosition = (position, numOfItems, doIncrement) => {
  let newPosition
  console.log(doIncrement)
  if (doIncrement) {
    console.log('increment')
    newPosition = position === numOfItems - 1 ? position : position + 1
  } else {
    newPosition = position === 0 ? position: position - 1
  }
  return {
    type: 'UPDATE_POS',
    newPosition
  }
}

export default updatePosition
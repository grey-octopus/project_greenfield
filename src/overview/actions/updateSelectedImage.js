const updateSelectedImage = index => {
  return {
    type: 'UPDATE_SELECTED_IMG',
    payload: index
  }
}

export default updateSelectedImage
const imageGalleryReducer = (state = { isExpanded: false }, action) => {
  const newState = state.isExpanded === false ? true : false
  switch(action.type) {
    case 'UPDATE_EXPANDED':
      return {...state, isExpanded: newState}
    default:
      return {...state}
  }
}

export default imageGalleryReducer
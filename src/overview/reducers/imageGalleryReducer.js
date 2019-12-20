const imageGalleryReducer = (state = { isExpanded: false, isZoomed: false }, action) => {
  switch(action.type) {
    case 'UPDATE_EXPANDED':
      return {...state, isExpanded: !state.isExpanded}
    case 'ZOOM':
      return {...state, isZoomed: !state.isZoomed}
    default:
      return {...state}
  }
}

export default imageGalleryReducer
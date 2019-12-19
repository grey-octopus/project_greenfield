const stylesReducer = (state = {}, action) => {
  switch(action.type) {
    case 'UPDATE_SELECTED':
      return {...state, selected: action.index, position: 0}
    case 'FETCH_STYLES':
      return {...state, styles: action.styles}
    case 'UPDATE_SELECTED_IMG':
      return {...state, selectedImage: action.payload}
    case 'UPDATE_POS':
      return {...state, position: action.newPosition }
    case 'UPDATE_QUEUE':
      return {...state, queue: action.queue}
    default:
      return state
  }
}

export default stylesReducer
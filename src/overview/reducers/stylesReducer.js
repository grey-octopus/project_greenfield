const stylesReducer = (state = {}, action) => {
  switch(action.type) {
    case 'UPDATE_SELECTED':
      return {...state, selected: action.index}
    case 'FETCH_STYLES':
      return {...state, styles: action.styles}
    default:
      return state
  }
}

export default stylesReducer
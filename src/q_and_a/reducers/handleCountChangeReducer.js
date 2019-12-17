const handleCountChangeReducer = (state=2,action) => {
  switch (action.type) {
    case "HANDLE_COUNT_CHANGE":
      return action.count;
    default:
      return state;
  }
}
export default handleCountChangeReducer;
const reducer = (state, action) => {
  if (action.type === "INC") {
    return (state = state + 1);
  }
  // if (action.type === "DEC" && state > 0) {
  //   return (state = state - 1);
  // } else {
  //   state = 0;
  // }
  // return state;
  return action.type === "DEC" && state > 0 ? state - 1 : state;
};
export default reducer;

const pageReducer = (state = 1, action) => {
  switch (action.type) {
    case "NEXTPAGE":
      return state + 1;
    case "PREVPAGE":
      if (state >= 2) {
        return state - 1;
      } else {
        return state;
      }
    default:
      return state;
  }
};

export default pageReducer;

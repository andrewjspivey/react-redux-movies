const darkModeReducer = (state = false, action) => {
  switch (action.type) {
    case "TOGGLEDARKMODE":
      return !state;
    default:
      return state;
  }
};

export default darkModeReducer;

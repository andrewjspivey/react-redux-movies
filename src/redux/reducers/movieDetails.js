const movieDetailsReducer = (state = {}, action) => {
  switch (action.type) {
    case "MOVIEDETAILS":
      return action.payload;
    default:
      return state;
  }
};

export default movieDetailsReducer;

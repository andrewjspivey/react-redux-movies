const searchTypeReducer = (state = "t", action) => {
  switch (action.type) {
    case "CHANGE_TYPE":
      return action.payload.target.value;
    default:
      return state;
  }
};

export default searchTypeReducer;

const searchTermReducer = (state = "", action) => {
  switch (action.type) {
    case "CHANGE":
      return action.payload.target.value;
    default:
      return state;
  }
};

export default searchTermReducer;

export const change = (event) => {
  return {
    type: "CHANGE",
    payload: event,
  };
};

export const searchTypeChange = (event) => {
  return {
    type: "CHANGE_TYPE",
    payload: event,
  };
};

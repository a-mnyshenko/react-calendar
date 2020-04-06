const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case "ADD_EVENT":
      return state.concat(action.data);
    default:
      return state;
  }
};

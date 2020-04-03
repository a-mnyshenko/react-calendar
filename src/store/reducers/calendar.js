const initialState = [{ title: "", date: "", end: "", notes: "" }];

export default (state = initialState, action) => {
  switch (action.type) {
    case "ADD_EVENT":
      return state.push(action.data);
    default:
      return state;
  }
};

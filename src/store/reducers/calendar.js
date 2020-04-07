const initialState = [
  {
    _id: "1",
    title: "test event #1",
    start: "2020-04-08T10:30:00Z",
    backgroundColor: "rgb(59, 134, 255)",
    editable: true,
    description: "Note #1",
  },
  {
    _id: "2",
    title: "test event #2",
    start: "2020-04-10",
    editable: true,
    description: "Note #2",
    backgroundColor: "rgb(59, 134, 255)",
  },
  {
    _id: "3",
    title: "test event #3",
    start: "2020-04-21T14:40",
    end: "2020-04-22T19:40",
    editable: true,
    description: "This is a cool awesome note",
    backgroundColor: "rgb(59, 134, 255)",
  },
  {
    _id: "4",
    title: "Event with maximum chars432143",
    start: "2020-04-11",
    end: "2020-04-11",
    editable: true,
    description: "Test description",
    backgroundColor: "rgb(59, 134, 255)",
  },
];

export default (state = initialState, action) => {
  switch (action.type) {
    case "ADD_EVENT":
      return state.concat(action.data);
    case "UPDATE_EVENT":
      return (state = [].concat(action.data));
    default:
      return state;
  }
};

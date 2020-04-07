const initialState = [
  {
    _id: "1",
    title: "My custom event",
    // date: "2020-04-03T10:30:00",
    start: "2020-04-08T10:30:00Z",
    // end: "2020-04-04T07:30:00",
    backgroundColor: "rgb(59, 134, 255)",
    // borderColor: "#000",
    editable: true,
    extentedProps: {
      status: "done",
    },
    description: "This is a cool eventsome note1@$51551",
  },
  {
    _id: "2",
    title: "event 334",
    // date: "2020-04-03",
    start: "2020-04-10",
    editable: true,
    description:
      "lond text description for width flex block testing lond text description for width flex block testing!@#!@$",
    backgroundColor: "rgb(59, 134, 255)",
  },
  {
    _id: "3",
    title: "1234567890123456789012345678901234567890",
    // date: "2020-04-03",
    start: "2020-04-21T14:40",
    end: "2020-04-22T19:40",
    editable: true,
    description: "This is a cool eventsome note !!!",
    backgroundColor: "rgb(59, 134, 255)",
  },
  {
    _id: "4",
    title: "123456789012345",
    // date: "2020-04-03",
    start: "2020-04-11",
    end: "2020-04-11",
    editable: true,
    description: "lond text description for width flex b @!!",
    backgroundColor: "rgb(59, 134, 255)",
  },
];

export default (state = initialState, action) => {
  switch (action.type) {
    case "ADD_EVENT":
      return state.concat(action.data);
    default:
      return state;
  }
};

export const addEvent = (data) => {
  console.log("New event data", data);
  return {
    type: "ADD_EVENT",
    data,
  };
};

export const updateEvent = (data) => {
  console.log("Updated event: ", data);
  return {
    type: "UPDATE_EVENT",
    data,
  };
};

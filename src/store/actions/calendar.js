export const addEvent = (data) => {
  console.log("New event data", data);
  return {
    type: "ADD_EVENT",
    data,
  };
};

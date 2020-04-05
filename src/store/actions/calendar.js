export const addEvent = (name, date, end, notes) => {
  console.log("aha", name);
  return {
    type: "ADD_EVENT",
    data: { name, date, end, notes },
  };
};

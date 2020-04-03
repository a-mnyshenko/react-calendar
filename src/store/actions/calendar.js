export const addEvent = (name, date, end, notes) => {
  return {
    type: "ADD_EVENT",
    data: { name, date, end, notes },
  };
};

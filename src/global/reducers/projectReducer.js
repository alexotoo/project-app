export const projectReducer = (state, action) => {
  switch (action.type) {
    case "ADD_PROJECT":
      console.log(action.payload);
      return state;

    default:
      return state;
  }
};

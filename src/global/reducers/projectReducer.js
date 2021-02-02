export const projectReducer = (state, action) => {
  switch (action.type) {
    case "ADD_PROJECT":
      console.log(state);
      return state;

    default:
      return state;
  }
};

export const projectReducer = (state, action) => {
  switch (action.type) {
    case "ADD_PROJECT":
      console.log(action.payload);
      return state;

    case "GET_ALL_PROJECTS":
      console.log(action.payload);
      return action.payload;
    default:
      return state;
  }
};

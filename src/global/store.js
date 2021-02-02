import { projectReducer } from "./reducers/projectReducer";

const initialStates = {};

const globalState = {
  authStates: {},
  projectStates: [
    {
      id: 1,
      title: "react app project",
      content: "this is a new contract we have to finish by end of month ",
    },
    {
      id: 2,
      title: "build new UI",
      content: "systems update requiring creation of a new UI ",
    },
    {
      id: 3,
      title: "new office",
      content:
        "due to the new rule and increase in staff we have to move to new office",
    },
  ],
};

export { globalState };

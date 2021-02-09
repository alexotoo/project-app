import { useQuery } from "react-query";
import { db } from "../config/fbconfig";

//get single project by id from firestore
export const getOneProject = async (id) => {
  let projectRef = db.collection("projects").doc(id);
  const getProject = await projectRef.get();
  const fbprojectRef = await getProject.data();

  return fbprojectRef;
};

const useGetProject = (projectId) => {
  return useQuery(["allprojects", projectId], () => getOneProject(projectId));
};

export default useGetProject;

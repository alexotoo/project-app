import React from "react";
import { useQueryClient } from "react-query";

//get single project by id from firestore
// export const getOneProject = async (id) => {
//   let projectRef = db.collection("projects").doc(id);
//   const getProject = await projectRef.get();
//   const fbprojectRef = await getProject.data();

//   return fbprojectRef;
// };

const useGetProject = (projectId) => {
  const queryClient = useQueryClient();
  const data = queryClient.getQueryData();
  const projectDetails = data.find((p) => p.id === projectId);
  return projectDetails;
};

export default useGetProject;

import React from "react";
import { useQueryClient } from "react-query";

const useGetProject = (projectId) => {
  const queryClient = useQueryClient();
  const data = queryClient.getQueryData();
  const projectDetails = data.find((p) => p.id === projectId);
  return projectDetails;
};

export default useGetProject;

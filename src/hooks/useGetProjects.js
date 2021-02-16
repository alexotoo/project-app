import React from "react";
import { useQuery } from "react-query";
import { db } from "../config/fbconfig";

export const useGetProjects = () => {
  //get all projects from firestore
  const getAllProjects = async () => {
    let projectsRef = db.collection("projects").orderBy("createdAt", "desc");
    let allprojects = await projectsRef.get();

    const data = allprojects.docs.map((doc) => {
      return { ...doc.data(), id: doc.id };
    });

    return data;
  };
  return useQuery("allprojects", getAllProjects);
};

export default useGetProjects;

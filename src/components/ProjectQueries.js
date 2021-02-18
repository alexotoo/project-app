//import React from "react";
import { useQuery } from "react-query";
import { db } from "../config/fbconfig";

//get all projects from firestore
const getAllProjects = async () => {
  let projectsRef = db.collection("projects");
  let allprojects = await projectsRef.get();

  const data = allprojects.docs.map((doc) => {
    return { ...doc.data(), id: doc.id };
  });
  return data;
};
const GetAllProjectsQuery = () => {
  return useQuery("allprojects", getAllProjects);
};

//get single project by id from firestore
const getOneProject = async (id) => {
  let projectRef = db.collection("projects").doc(id);
  const getProject = await projectRef.get();
  const fbprojectRef = await getProject.data();

  return fbprojectRef;
};

const GetOneProjectQuery = (projectId) => {
  return useQuery(["allprojects", projectId], () => getOneProject(projectId));
};

export { GetAllProjectsQuery, GetOneProjectQuery };

import React from "react";
import ProjectSummary from "./ProjectSummary";
import { Link } from "react-router-dom";
import useGetProjects from "../hooks/useGetProjects";

const ProjectList = () => {
  const { data, isLoading } = useGetProjects();
  console.log(data);
  return (
    <div>
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        data.map((project) => {
          return (
            <Link to={`/Project/${project.id}`} key={project.id}>
              <ProjectSummary project={project} />
            </Link>
          );
        })
      )}
    </div>
  );
};

export default ProjectList;

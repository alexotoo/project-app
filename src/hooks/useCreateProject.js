import React from "react";
import { useMutation } from "react-query";
import { db } from "../config/fbconfig";

const useCreateProject = async (e) => {
  //   const onSubmit = (e) => {
  //     e.preventDefault();
  //     mutation.mutate(new FormData(e.target));
  //   };
  return useMutation(async (newProject) => {
    const addProjectRef = await db.collection("projects").add(newProject);
    // console.log(addProjectRef.id);

    // return addProjectRef.id;
  });
};

export default useCreateProject;

// const CreateTodo = () => {
//   const mutation = useMutation((formData) => {
//     return fetch("/api", formData);
//   });
//   const onSubmit = (event) => {
//     event.preventDefault();
//     mutation.mutate(new FormData(event.target));
//   };

//   return <form onSubmit={onSubmit}>...</form>;
// };
//Add a new document with a generated id.
// db.collection("cities").add({
//     name: "Tokyo",
//     country: "Japan"
// })
// .then((docRef) => {
//     console.log("Document written with ID: ", docRef.id);
// })
// .catch((error) => {
//     console.error("Error adding document: ", error);
// });

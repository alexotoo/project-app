import db from "../../config/fbconfig";

export const createProjectAction = async (project) => {
  try {
    let { title, content } = project;
    // Add a new document with a generated id.
    const docRef = await db.collection("projects").add({
      title,
      content,
      authorFirstName: "Ben",
      authorLastName: "Williams",
      authorId: 123456,
      createdAt: new Date(),
    });
    const Id = docRef.id;
    console.log(`document created with id:${Id}`);
    return { payload: Id, type: "ADD_PROJECT" };
  } catch (error) {
    console.error("Error adding document: ", error);
  }
};

export const getAllProjects = async () => {
  let projectsRef = db.collection("projects");
  let allprojects = await projectsRef.get();

  const data = allprojects.docs.map((doc) => {
    return { ...doc.data(), id: doc.id };
  });
  console.log(data);
  return { payload: data, type: "GET_ALL_PROJECTS" };
};

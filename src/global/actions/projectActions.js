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
    const id = docRef.id;
    console.log(`document created with id:${id}`);
    console.log(project);
    return { id };
  } catch (error) {
    console.error("Error adding document: ", error);
  }
};

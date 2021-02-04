import { auth } from "../../config/fbconfig";

const userSignIn = async (email, password) => {
  try {
    const signInUser = await auth.signInWithEmailAndPassword(email, password);

    const signedInUser = signInUser.user;
    console.log(signedInUser);
    return signedInUser;
  } catch (error) {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorCode, errorMessage);
  }
};

export { userSignIn };

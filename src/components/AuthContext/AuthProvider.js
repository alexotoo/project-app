import React, { useContext, useState, useEffect } from "react";
import { auth } from "../../config/fbconfig";

const AuthContext = React.createContext();

export function useAuthContext() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(true);
  const [firstN, setFirstN] = useState("");
  const [lastN, setLastN] = useState("");
  const [initials, setInitials] = useState("");
  const [profileUpdate, setProfileUpdate] = useState(false);

  ////sign up new user
  const signUp = async (email, password, first, last) => {
    // setFirstN(first);
    // setLastN(last);

    //formate user name for firestore user displayName
    const createUserProfileNames = (first, last) => {
      const fiestInitials = first[0];
      const lastInitials = last[0];
      const userInitials = fiestInitials.concat(lastInitials);
      const iniToUpperCase = userInitials.toUpperCase();
      const userProfileName = `${iniToUpperCase},${first},${last}`;
      return userProfileName;
    };

    //get user name to create firestore displayName
    const currentUserNames = createUserProfileNames(first, last);

    //create a new user
    const currentUserIn = await auth.createUserWithEmailAndPassword(
      email,
      password
    );
    //update the created user's displayName
    if (currentUserIn) {
      const userIn = currentUserIn.user;
      try {
        const updateProfileDisplay = await userIn.updateProfile({
          displayName: currentUserNames,
        });
        console.log("update done");
        setProfileUpdate(true);
      } catch (error) {
        console.log(error);
      }
    }
  };

  ////sign in exiting user
  const signIn = (email, password) => {
    return auth.signInWithEmailAndPassword(email, password);
  };

  ////sign user out
  const signOut = () => auth.signOut();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      setLoading(false);
      if (!user) {
        return;
      } else {
        const userdisplayName = user.displayName;
        if (userdisplayName === null) {
          return;
        }
        const names = userdisplayName.split(",");
        setFirstN(names[1]);
        setLastN(names[2]);
        setInitials(names[0]);
      }
    });

    return unsubscribe;
  }, [profileUpdate]);

  const value = {
    currentUser,
    signUp,
    signIn,
    signOut,
    firstN,
    lastN,
    initials,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}

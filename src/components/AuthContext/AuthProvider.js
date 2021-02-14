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
  const [profileUpdate, setProfileUpdate] = useState(false);

  //sign up new user
  const signUp = async (email, password, first, last) => {
    setFirstN(first);
    setLastN(last);

    const createUserProfileNames = (first, last) => {
      const fiestInitials = first[0];
      const lastInitials = last[0];
      const userInitials = fiestInitials.concat(lastInitials);
      const iniToUpperCase = userInitials.toUpperCase();
      const userProfileName = `${iniToUpperCase},${first},${last}`;
      return userProfileName;
    };

    const currentUserNames = createUserProfileNames(first, last);
    console.log(currentUserNames);

    const currentUserIn = await auth.createUserWithEmailAndPassword(
      email,
      password
    );

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

  //sign in exiting user
  const signIn = (email, password) => {
    return auth.signInWithEmailAndPassword(email, password);
  };

  const signOut = () => auth.signOut();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      setLoading(false);
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
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}

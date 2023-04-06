import { createContext, useContext, useEffect, useState } from "react";
// import {
//   createUserWithEmailAndPassword,
//   signInWithEmailAndPassword,
//   signOut,
//   onAuthStateChanged,
// } from "firebase/auth";
// import { auth } from "../firebase/firebaseConfig";
// import { getUserType } from "../firebase/functions";

const UserContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [userType, setUser] = useState({
    organiastion: "",
    role: "user",
    isAdmin: false,
  });

  useEffect(() => {
    // const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
    //   const type = await getUserType();
    //   console.log('got user type',type.data)
    //   setUser(type.data);
    // });
    // return () => {
    //   unsubscribe();
    // };
  }, []);
  return (
    <UserContext.Provider value={{ ...userType }}>
      {children}
    </UserContext.Provider>
  );
};

export const GetType = () => { 
  return useContext(UserContext);
};

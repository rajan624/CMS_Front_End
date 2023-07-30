import axios from "axios";
import Cookies from "universal-cookie";
import { createContext, useContext, useEffect, useState } from "react";
const cookies = new Cookies();
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
  });

  useEffect(() => {
    const fetchUserProfile = async () => {
      const token = cookies.get("token");
      console.log(token)
      if (!token) {
        return;
      }
      console.log("testing we are token is not working")
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_API_URL}/user/profile`,
          {
            headers: { Authorization: `${token}` },
          }
        );
        setUser(response.data.profile);
      } catch (error) {
        console.log(error);
      }
    };

    fetchUserProfile();
    
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

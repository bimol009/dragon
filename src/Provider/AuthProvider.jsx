import React, { createContext, useState } from "react";
import app from "../firebase/firebase.config";
import { useEffect } from "react";

import {
  createUserWithEmailAndPassword,
  getAuth,
  GithubAuthProvider,
  GoogleAuthProvider,
  onAuthStateChanged,
  sendEmailVerification,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";

export const AuthContext = createContext(null);

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider;
const githubProvider = new GithubAuthProvider;

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const createUserEmailPass = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signIn = (email,password)=>{
    setLoading(true)
    return signInWithEmailAndPassword(auth,email,password)
}

  const showEmailVerification = (user) => {
    setLoading(true);
    return sendEmailVerification(user);
  };

const googleSignEmailPass = ()=>{
    setLoading(true);
    return signInWithPopup(auth,googleProvider)
}

const gitHubProviderEmailPass = ()=>{
    setLoading(true);
    return signInWithPopup(auth,githubProvider)
}

  const forgotPass = (email) => {
    setLoading(true);
    return sendPasswordResetEmail(auth, email);
  };

  const logOutEmail = ()=>{
    return signOut(auth)
  }

//   observe user state

useEffect(()=>{
 const unsubsCribe = onAuthStateChanged(auth,currentUser=>{
        setUser(currentUser);
        setLoading(false)
    });
    // stop unmount observe 
    return()=>{
        unsubsCribe();
    }
},[])

  const authInfo = {
    user,
    loading,
    createUserEmailPass,
    showEmailVerification,
    forgotPass,
    signIn,
    logOutEmail,
    googleSignEmailPass,
    gitHubProviderEmailPass
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;

import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  GithubAuthProvider,
} from "firebase/auth";
import PropTypes from "prop-types";
import { createContext, useEffect, useState } from "react";
import app from "../Firebase/firebase.config";
import toast, { Toaster } from "react-hot-toast";

export const AuthContext = createContext();

const ProviderContext = ({ children }) => {
  const auth = getAuth(app);
  const [User, setUser] = useState(null);
  const [Loader, setLoader] = useState(true);

  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();

  const CreateUser = (email, password) => {
    setLoader(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const LogIn = (email, password) => {
    setLoader(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const LogOut = () => {
    setLoader(true);
    return signOut(auth);
  };

  const google = () => {
    return signInWithPopup(auth, googleProvider);
  };

  const github = () => {
    return signInWithPopup(auth, githubProvider);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log(currentUser);
      setUser(currentUser);
      setLoader(false);
    });
    return () => {
      unsubscribe();
    };
  }, [auth]);

  const AuthInfo = {
    User,
    CreateUser,
    LogIn,
    LogOut,
    Loader,
    google,
    github,
  };

  return (
    <AuthContext.Provider value={AuthInfo}>
      {children}
      <Toaster />
    </AuthContext.Provider>
  );
};

ProviderContext.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ProviderContext;

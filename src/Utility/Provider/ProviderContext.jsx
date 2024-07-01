import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  getAuth,
} from "firebase/auth";
import PropTypes from "prop-types";
import { createContext, useEffect, useState } from "react";
import app from "../Firebase/firebase.config";
export const AuthContext = createContext();
const ProviderContext = ({ children }) => {
  const auth=getAuth(app);
  //toast
  const [User, setUser] = useState(null);
  const [Loader, setLoader] = useState(true);
  //create user
  const CreateUser = (email, password) => {
    setLoader(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  //sign in
  const LogIn = (email, password) => {
    setLoader(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  //log out
  const LogOut = () => {
    setLoader(true);
    return signOut(auth);
  };
  //onauthStateChange
  useEffect(() => {
    const Unsubscribe = () => {
      onAuthStateChanged(auth, (CurrentUser) => {
        console.log(CurrentUser);
        setUser(CurrentUser);
        setLoader(false);
      });
    };
    return () => {
      Unsubscribe();
    };
  }, [auth]);
  const AuthInfo = {
    User,
    CreateUser,
    LogIn,
    LogOut,
    Loader,
  };
  return (
    <AuthContext.Provider value={AuthInfo}>
      {children}
    </AuthContext.Provider>
  );
};
ProviderContext.propTypes = {
  children: PropTypes.node,
};
export default ProviderContext;

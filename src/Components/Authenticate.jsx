

import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  signInWithPopup,
  GoogleAuthProvider,
  updateProfile,
} from "firebase/auth";
import auth from "../../firebase.config";
// import axios from "axios";

export const AuthProvider = createContext(null);

const Authenticate = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const GoogleProvider = new GoogleAuthProvider();

  const register = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const login = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const goggleLogin = () => {
    setLoading(false);
    return signInWithPopup(auth, GoogleProvider);
  };

  const ProfileUpdate = (name, photo) => {
    setLoading(true);
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    });
  };

  const logout = () => {
    setLoading(true);
    return signOut(auth);
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => {
      unSubscribe();
    };
  }, []);

  const info = {
    register,
    user,
    login,
    goggleLogin,
    ProfileUpdate,
    logout,
    loading,
  };

  return (
    <div>
      <AuthProvider.Provider value={info}>
        {children}
      </AuthProvider.Provider>
    </div>
  );
};

Authenticate.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Authenticate;
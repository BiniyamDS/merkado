import { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../firebase";
import SplashScreen from "../components/SplashScreen";

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [loading, setLoading] = useState(true);
  const [currentUser, setCurrentUser] = useState();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setLoading(false);
      setCurrentUser(user);
    });
    return unsubscribe;
  }, []);

  function register(email, password) {
    return auth.createUserWithEmailAndPassword(email, password);
  }

  function logout() {
    return auth.signOut();
  }

  function signIn(email, password) {
    return auth.signInWithEmailAndPassword(email, password);
  }

  function resetPassword(email) {
    return auth.sendPasswordResetEmail(email)
  }

  const value = {
    currentUser,
    register,
    signIn,
    logout,
    resetPassword
  };

  return (
    <AuthContext.Provider value={value}>
      {loading ? <SplashScreen/> : children}
      {/* <SplashScreen/> */}
    </AuthContext.Provider>
  );
}

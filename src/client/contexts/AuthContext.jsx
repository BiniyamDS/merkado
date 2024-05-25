import { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../firebase";
import SplashScreen from "../components/SplashScreen";
import { collection, getDocs, addDoc } from "firebase/firestore";
import { db } from "../firebase";

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [loading, setLoading] = useState(true);
  const [currentUser, setCurrentUser] = useState();
  const [products, setProducts] = useState();

  async function getProducts() {
    const querySnapshot = await getDocs(collection(db, "products"));
    const products_db = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    setProducts(products_db);
  }

  async function addProduct(item) {
    const docRef = await addDoc(collection(db, "products"), item);

    console.log("Document written with ID:", docRef.id);
  }

  useEffect(() => {
    getProducts()
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
    return auth.sendPasswordResetEmail(email);
  }

  const value = {
    currentUser,
    register,
    signIn,
    logout,
    resetPassword,
    products,
    getProducts
  };

  return (
    <AuthContext.Provider value={value}>
      {loading ? <SplashScreen /> : children}
      {/* <SplashScreen/> */}
    </AuthContext.Provider>
  );
}

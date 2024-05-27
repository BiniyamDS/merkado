import { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../firebase";
import SplashScreen from "../components/SplashScreen";
import {
  collection,
  getDocs,
  addDoc,
  setDoc,
  doc,
  updateDoc,
  arrayUnion,
  arrayRemove,
  getDoc,
} from "firebase/firestore";
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
    getProducts();
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setLoading(false);
      setCurrentUser(user);
    });
    return unsubscribe;
  }, []);

  async function register(email, password) {
    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      addUser(user.uid);
    } catch (err) {
      throw new Error(err);
    }
  }

  function logout() {
    return auth.signOut();
  }

  async function addUser(uid) {
    await setDoc(doc(db, "users", uid), {
      cart: [],
      phoneNumber: null,
      accountType: 1,
    });
  }

  async function updateUser(account, phone) {
    const userRef = doc(db, "users", currentUser.uid);

    // Set the "capital" field of the city 'DC'
    await updateDoc(userRef, {
      phoneNumber: phone,
      accountType: Number(account),
    });
  }

  function signIn(email, password) {
    return auth.signInWithEmailAndPassword(email, password);
  }

  async function addToCart(productId) {
    const cartRef = doc(db, "users", currentUser.uid);

    try {
      updateDoc(cartRef, {
        cart: arrayUnion(productId),
      });
    } catch (err) {
      console.log(err);
    }
  }

  async function removeFromCart(productId) {
    const cartRef = doc(db, "users", currentUser.uid);

    try {
      updateDoc(cartRef, {
        cart: arrayRemove(productId),
      });
    } catch (err) {
      console.log(err);
    }
  }

  function resetPassword(email) {
    return auth.sendPasswordResetEmail(email);
  }

  async function getCart() {
    const userRef = doc(db, "users", currentUser.uid);
    const cart_db = [];

    try {
      const docSnap = await getDoc(userRef); // Get the document data

      if (docSnap.exists) {
        const data = docSnap.data();
        const cartArray = data["cart"]; // Access the desired array
        // await cartArray.map(async item => cart_db.push(await getProduct(item)))
        for (const item of cartArray) {
          const p_item = await getProduct(item);
          cart_db.push({id: item ,...p_item});
        }
        return cart_db;
        // You can perform other operations on the array elements here
      } else {
        // Document not found handling
        console.log("Document not found!");
      }
    } catch (error) {
      console.error("Error retrieving document:", error);
    }
  }

  async function emptyCart(){
    console.log('Cart emptied')
    const cartRef = doc(db, "users", currentUser.uid);
  
    try {
      updateDoc(cartRef, {
        cart: [],
      });
    } catch (err) {
      console.log(err);
    }

  }

  async function getOrders(){
    const userRef = doc(db, "users", currentUser.uid);

    try {
      const docSnap = await getDoc(userRef); // Get the document data

      if (docSnap.exists) {
        const data = docSnap.data();
        const prodArray = data["orders"]; // Access the desired array
        // await cartArray.map(async item => cart_db.push(await getProduct(item)))
        
        return prodArray;
        // You can perform other operations on the array elements here
      } else {
        // Document not found handling
        console.log("Document not found!");
      }
    } catch (error) {
      console.error("Error retrieving document:", error);
    }
  }

  async function checkOut(cartList){
    console.log('Cart checked out')
    const cartRef = doc(db, "users", currentUser.uid);

    try {
      updateDoc(cartRef, {
        orders: arrayUnion(...cartList),
      });
    } catch (err) {
      console.log(err);
    }
  }

  async function getProduct(id) {
    const productRef = doc(db, "products", id);
    try {
      const docSnap = await getDoc(productRef);
      const productData = docSnap.data();
      return productData;
    } catch (err) {
      console.log(err);
    }
  }

  const value = {
    currentUser,
    register,
    signIn,
    logout,
    resetPassword,
    products,
    getProducts,
    updateUser,
    addToCart,
    removeFromCart,
    getCart,
    emptyCart,
    checkOut,
    getOrders
  };

  return (
    <AuthContext.Provider value={value}>
      {loading ? <SplashScreen /> : children}
      {/* <SplashScreen/> */}
    </AuthContext.Provider>
  );
}

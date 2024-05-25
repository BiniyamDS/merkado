// Import the functions you need from the SDKs you need

import firebase from 'firebase/compat/app'
// import { getAnalytics } from 'firebase/analytics';
import 'firebase/compat/auth'
import { getFirestore } from 'firebase/firestore';
// import { collection, getDocs } from "firebase/firestore"; 

// TODO: Add SDKs for Firebase products that you want to use
import "firebase/auth";
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// console.log(import.meta.env.VITE_REACT_APP_API_KEY)

import { getStorage, ref } from "firebase/storage";

// Get a reference to the storage service, which is used to create references in your storage bucket

const firebaseConfig = {
  apiKey: import.meta.env.VITE_REACT_APP_API_KEY,
  authDomain: import.meta.env.VITE_REACT_APP_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_REACT_APP_PROJECT_ID,
  storageBucket: import.meta.env.VITE_REACT_APP_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_REACT_APP_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_REACT_APP_APP_ID,
  measurmentId: import.meta.env.VITE_REACT_APP_MEASURMENT_ID
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
// const analytics = getAnalytics(app)
const storage = getStorage();

// Create a storage reference from our storage service
const storageRef = ref(storage);
export const auth = app.auth();
export const db = getFirestore(app)
export default app;

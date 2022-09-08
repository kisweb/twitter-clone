// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDIvfrJ-awY0V3XRnzzuMRVYjIqteq7udg",
  authDomain: "kis-twitter.firebaseapp.com",
  projectId: "kis-twitter",
  storageBucket: "kis-twitter.appspot.com",
  messagingSenderId: "230906014107",
  appId: "1:230906014107:web:c30dde99304a06ec65d93e"
  // apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY, 
  // authDomain: "twitter-v4.firebaseapp.com",
  // projectId: "twitter-v4",
  // storageBucket: "twitter-v4.appspot.com",
  // messagingSenderId: "958780669916",
  // appId: "1:958780669916:web:c0ab24c3f605b0a233d919",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();
export { app, db, storage };

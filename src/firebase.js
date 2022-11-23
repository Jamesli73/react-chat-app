import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCHeOtRmD9aBD3W7W-q-2tzhXIILhgOFwc",
  authDomain: "chat-cc4a2.firebaseapp.com",
  projectId: "chat-cc4a2",
  storageBucket: "chat-cc4a2.appspot.com",
  messagingSenderId: "927105519856",
  appId: "1:927105519856:web:c859b8635162ad13683235",
  measurementId: "G-8WKKVBDBTR"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
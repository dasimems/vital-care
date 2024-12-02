import { initializeApp } from "firebase/app";
import {
  getAuth,
  initializeAuth,
  getReactNativePersistence
} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getDatabase } from "firebase/database";
import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";

const firebaseConfig = {
  apiKey: "AIzaSyAyOtDtNr8SphGJjfLcusHrvdsC01age1U",
  authDomain: "vital-care-8fc35.firebaseapp.com",
  projectId: "vital-care-8fc35",
  storageBucket: "vital-care-8fc35.appspot.com",
  messagingSenderId: "77835911918",
  appId: "1:77835911918:web:58b96c03b98c245da429ff",
  measurementId: "G-V4KXXQ588F"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const auth = getAuth(app);
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});
const fireStoreDb = getFirestore(app);
const firebaseDb = getDatabase(app);

export { auth, fireStoreDb, firebaseDb };

import { getFirestore } from "@firebase/firestore";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { initializeApp } from "firebase/app";
import * as firebaseAuth from 'firebase/auth';

const reactNativePersistence = (firebaseAuth as any).getReactNativePersistence

const firebaseConfig = {
  apiKey: "AIzaSyBZdLeC0RzGeP8UXJ9Kb8ii07606em7Q4s",
  authDomain: "parkinglotapp-8a640.firebaseapp.com",
  projectId: "parkinglotapp-8a640",
  storageBucket: "parkinglotapp-8a640.appspot.com",
  messagingSenderId: "400575056016",
  appId: "1:400575056016:web:c6a834fe8b5a8a7b56f015",
  measurementId: "G-98HQTYFLZP"
}

export const FIREBASE_APP = initializeApp(firebaseConfig);

export const FIREBASE_AUTH = firebaseAuth.initializeAuth(FIREBASE_APP, {
  persistence: reactNativePersistence(AsyncStorage),
})

export const FIRESTORE_DB = getFirestore(FIREBASE_APP)

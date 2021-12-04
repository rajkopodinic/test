// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, onSnapshot, query, getDocs, orderBy } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAWD4dTK7oRXo_DsrEN5DBNDiCzNs3Kw6o",
    authDomain: "mistv-77101.firebaseapp.com",
    projectId: "mistv-77101",
    storageBucket: "mistv-77101.appspot.com",
    messagingSenderId: "861038298790",
    appId: "1:861038298790:web:734578ae08f2b367319667",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

// Initialize Services
export const db = getFirestore()

// Collection References
export const collectionRefStreams = collection(db, 'streams')

// Get Collection Data
export const streamsData = onSnapshot((collectionRefStreams), (snapshot) => {
    var streams = [];
    snapshot.docs.forEach((doc) => {
        streams.push({ ...doc.data(), firebaseId: doc.id })
    })
    console.log('firebase init', streams)
    return streams;
})
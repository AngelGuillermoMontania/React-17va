// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; /* ESTO NO ES LO MISMO QUE ME DA FIREBASE */
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {

};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db =
  getFirestore(app); /* ESTO NO ES LO MISMO QUE ME DA FIREBASE */

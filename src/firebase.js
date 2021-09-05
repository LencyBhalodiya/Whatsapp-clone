import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAMDHILIfALr0zDdMj3CNfQl8KggAJ-XNo",
  authDomain: "whatsapp-clone-23340.firebaseapp.com",
  projectId: "whatsapp-clone-23340",
  storageBucket: "whatsapp-clone-23340.appspot.com",
  messagingSenderId: "840174639397",
  appId: "1:840174639397:web:056a37b19c1fe7e83ba2cc",
  measurementId: "G-CFLXF1T8KG",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;

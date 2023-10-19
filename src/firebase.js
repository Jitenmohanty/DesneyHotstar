import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAmyB581zLbvNfEs9GNeVRq7xqWAb9RrN8",
  authDomain: "disney-clone-9e3e3.firebaseapp.com",
  projectId: "disney-clone-9e3e3",
  storageBucket: "disney-clone-9e3e3.appspot.com",
  messagingSenderId: "1084579619969",
  appId: "1:1084579619969:web:61d3f7063da595b959d980",
};

// const firebaseApp = firebase.initializeApp(firebaseConfig);
// const db = firebaseApp.firestore();
// const auth = firebase.auth();
// const provider = new firebase.auth.GoogleAuthProvider();
// const storage = firebase.storage();

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };
// export default db;

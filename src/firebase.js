// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase';
const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDxSsjKuvra5zHRlpX9B3O5UyRrWsvvYZ0",
  authDomain: "whatsapp-clone-bde11.firebaseapp.com",
  projectId: "whatsapp-clone-bde11",
  storageBucket: "whatsapp-clone-bde11.appspot.com",
  messagingSenderId: "379515848679",
  appId: "1:379515848679:web:dedaa9eb2352fd808e9f42",
  measurementId: "G-C5NS7VD0X6"
});


  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth, provider};
  export default db;
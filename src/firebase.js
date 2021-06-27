import firebase from 'firebase'

const firebaseConfig = {
//Replace with your firebaseConfig
};

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { db, auth };
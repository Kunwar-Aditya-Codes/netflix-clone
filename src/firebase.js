import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyAFj19y1lJACmbL0_bR-QKG0RZsI3WvzrI',
  authDomain: 'clone-netflix-6ae1c.firebaseapp.com',
  projectId: 'clone-netflix-6ae1c',
  storageBucket: 'clone-netflix-6ae1c.appspot.com',
  messagingSenderId: '19944095812',
  appId: '1:19944095812:web:e4a0d83e9d1a369e89fc11',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;

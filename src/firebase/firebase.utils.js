import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: 'AIzaSyDgL7GyhZsHXG6sMHv9tIjLA7rCpE2rRLo',
    authDomain: 'ecom-db-2d07d.firebaseapp.com',
    projectId: 'ecom-db-2d07d',
    storageBucket: 'ecom-db-2d07d.appspot.com',
    messagingSenderId: '647789682348',
    appId: '1:647789682348:web:ec81ccb8057e638ddac909',
    measurementId: 'G-8JCQ2J879S'
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if(!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapshot = await userRef.get();

  if(!snapshot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
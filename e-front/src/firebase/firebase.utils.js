import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const config = {
	apiKey: 'AIzaSyDH3stF4gOqr2pcWK37TELqMRXGI3eQh_g',
	authDomain: 'e-commerce-27574.firebaseapp.com',
	projectId: 'e-commerce-27574',
	storageBucket: 'e-commerce-27574.appspot.com',
	messagingSenderId: '346276619805',
	appId: '1:346276619805:web:8c184082b70ac4976f88f4',
	measurementId: 'G-1CVTQVXVB9'
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

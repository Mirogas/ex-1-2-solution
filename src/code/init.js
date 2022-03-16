import firebaseConfig from './config';
import { initializeApp } from 'firebase/app';
import { getFirestore} from "firebase/firestore"
import { GoogleAuthProvider } from '@firebase/auth';
import { getAuth } from "firebase/auth";

// initialisation de firebase *important d'avoir ça en 1er*
export const instanceFirebase = initializeApp(firebaseConfig);

// Initialiser Auth
export const authFirebase = getAuth();
export const authGoogle = new GoogleAuthProvider();

// initialisation de firestore
export const bdFirestore = getFirestore();

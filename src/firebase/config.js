import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyDHdNGEA07vyEiXVNLrtGiDBMuQJ7p-BvU',
  authDomain: 'readinglistapp-5d150.firebaseapp.com',
  projectId: 'readinglistapp-5d150',
  storageBucket: 'readinglistapp-5d150.appspot.com',
  messagingSenderId: '631129521773',
  appId: '1:631129521773:web:dfa98738f7f656e94f0964',
};

initializeApp(firebaseConfig);
const db = getFirestore();
const auth = getAuth();

export { db, auth };

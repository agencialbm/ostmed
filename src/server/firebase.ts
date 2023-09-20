import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyAm8omUh6wb__2T0BhMfkJzcFhdD9jVkZ4',
  authDomain: 'osteomed-da080.firebaseapp.com',
  projectId: 'osteomed-da080',
  storageBucket: 'osteomed-da080.appspot.com',
  messagingSenderId: '76509862778',
  appId: '1:76509862778:web:f0088497b2137df4ec14c3'
};


export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);


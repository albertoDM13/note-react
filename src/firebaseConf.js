// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDXqIvHyta46Ve5vQPkfPiGGkqodO6J8yc',
  authDomain: 'note-101dc.firebaseapp.com',
  projectId: 'note-101dc',
  storageBucket: 'note-101dc.appspot.com',
  messagingSenderId: '309109781871',
  appId: '1:309109781871:web:b2019b4674115b24dca49a',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore();

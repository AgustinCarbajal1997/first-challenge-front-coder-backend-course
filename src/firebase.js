
import firebase from 'firebase/app';
import 'firebase/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyAvNF3ZldeljT3f-Z3-gVulT6IOEnEW-ao",
  authDomain: "final-project-react-code-e15fc.firebaseapp.com",
  projectId: "final-project-react-code-e15fc",
  storageBucket: "final-project-react-code-e15fc.appspot.com",
  messagingSenderId: "1054596174122",
  appId: "1:1054596174122:web:4dda409f0e427d71590e53"
};

const app = firebase.initializeApp(firebaseConfig);
export const firestore = firebase.firestore(app)

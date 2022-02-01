import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyARu1mSNJOuD2b2mSlaXkN05hq6Z0HDG6I",
    authDomain: "todo-list-vue-cce40.firebaseapp.com",
    projectId: "todo-list-vue-cce40",
    storageBucket: "todo-list-vue-cce40.appspot.com",
    messagingSenderId: "1089356822956",
    appId: "1:1089356822956:web:126ca178c8d2d1166fe209"
  };

firebase.initializeApp(firebaseConfig)

const db = firebase.firestore()
const auth = firebase.auth()

const profileCollection = db.collection('profile')
const tasksCollection = db.collection('tasks')

export {
    db, auth, profileCollection, tasksCollection
}
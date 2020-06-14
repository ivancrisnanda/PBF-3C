import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyDcvhz-9_fw7oMFD-ipGS6jZ8oV-ZIiqFg",
  authDomain: "uas3c-7b8ed.firebaseapp.com",
  databaseURL: "https://uas3c-7b8ed.firebaseio.com",
  projectId: "uas3c-7b8ed",
  storageBucket: "uas3c-7b8ed.appspot.com",
  messagingSenderId: "1074624089634",
  appId: "1:1074624089634:web:1abe6e13a359e8682dc47b",
  measurementId: "G-PSR113NCYS"
};
  class Firebase{
    constructor(){
        firebase.initializeApp(firebaseConfig);

        this.auth = firebase.auth();
        this.db = firebase.firestore();
    }
}
export const myFirebase = firebase.initializeApp(firebaseConfig);
const baseDb = myFirebase.firestore();
export const db = baseDb;

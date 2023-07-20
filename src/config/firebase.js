import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

const firebaseConfig = {
  apiKey: "AIzaSyB_tBUC3NKHKQuSo7gwI-vb7XoRf1IMLek",
  authDomain: "file-management-52a96.firebaseapp.com",
  projectId: "file-management-52a96",
  storageBucket: "file-management-52a96.appspot.com",
  messagingSenderId: "177695626324",
  appId: "1:177695626324:web:c02dd32de259b8522c49c1"
};

const fire = firebase.initializeApp(firebaseConfig);

export default fire;

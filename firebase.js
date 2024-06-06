import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Replace the following with your app's Firebase project configuration
// See: https://support.google.com/firebase/answer/7015592
const firebaseConfig = {
        apiKey: "AIzaSyApOjjbRsgqwPjkKsV4OR0ge-JwXMnu9X0",
        authDomain: "class-work-26301.firebaseapp.com",
        projectId: "class-work-26301",
        storageBucket: "class-work-26301.appspot.com",
        messagingSenderId: "1014190952032",
        appId: "1:1014190952032:web:ccff44e5ae427a4c08bd05"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//Initialize Cloud Firestore, Cloud Storage and get a reference to the service
export var db = getFirestore(app)

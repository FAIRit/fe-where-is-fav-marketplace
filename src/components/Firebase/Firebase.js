import firebase from "firebase/app";
import 'firebase/firestore'


const firebaseConfig = {
    apiKey: "AIzaSyBRN246Bqaox5T5voYD0A1MKUVFu0T26oE",
    authDomain: "detailsmarket-52617.firebaseapp.com",
    databaseURL: "https://detailsmarket-52617.firebaseio.com",
    projectId: "detailsmarket-52617",
    storageBucket: "detailsmarket-52617.appspot.com",
    messagingSenderId: "198192772491",
    appId: "1:198192772491:web:756985ebf50de51caf2b8e",
    measurementId: "G-Z4GKK4LRXS"
};

firebase.initializeApp(firebaseConfig);

export default firebase;

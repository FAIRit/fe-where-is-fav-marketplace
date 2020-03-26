import app from 'firebase/app';

const config = {
    apiKey: "AIzaSyAWcfbpQXUNDm5dkn4IjGnkUifr49LaxvE",
    authDomain: "fav-market.firebaseapp.com",
    databaseURL: "https://fav-market.firebaseio.com",
    projectId: "fav-market",
    storageBucket: "fav-market.appspot.com",
    messagingSenderId: "902225836330",
    appId: "1:902225836330:web:2d9a32756e639a25fc4653",
    measurementId: "G-P7F7SZ7TPR"
};

class Firebase {
    constructor() {
        app.initializeApp(config);
    }
}
export default Firebase;

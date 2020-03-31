import React from "react";
import firebase from "firebase";
import config from './config';

class Firebase extends React.Component {
    constructor(props) {
        super(props);
        firebase.initializeApp(config);

        this.state = {
            markets: []
        }
    }

    writeUserData = () => {
        firebase.database().ref('/').set(this.state);
        console.log('DATA SAVED');
    };

       getUserData = () => {
        let ref = Firebase.database().ref('/');
        ref.on('value', snapshot => {
            const state = snapshot.val();
            this.setState(state);
        });
        console.log('DATA RETRIEVED');
    };

    componentDidMount() {
        this.getUserData();
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState !== this.state) {
            this.writeUserData();
        }
    }

}
export default Firebase;

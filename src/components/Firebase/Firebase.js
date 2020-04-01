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

}
export default Firebase;

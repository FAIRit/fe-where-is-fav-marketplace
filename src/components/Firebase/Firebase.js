import app from 'firebase/app';
import 'firebase/auth';

class Firebase {
    constructor() {
        app.initializeApp(config);

        this.db = app.database();
    }
}
export default Firebase;

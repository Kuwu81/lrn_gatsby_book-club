import firebaseConfig from "./config";
import app from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/functions";
import "firebase/storage";

app.initializeApp(firebaseConfig);

class Firebase {
    constructor() {
        if (!firebaseInstance) {
            this.auth = app.auth();
            this.db = app.firestore();
            this.functions = app.functions();
            this.storage = app.storage();
        }
    }

    async getUserProfile({userId}) {
        return this.db.collection('profiles')
            .where('userId', '==', userId).get(); // get() means running only once as in REST
    }

    async register({ username, email, password }) {
        const newUser = await this.auth.createUserWithEmailAndPassword(email, password);
        return this.db.collection('profiles').doc(username).set({
            userId: newUser.user.uid //specific to firestore
        })
    }

    async login({ email, password }) {
        return this.auth.signInWithEmailAndPassword(email, password);
    }

    async logout() {
        await this.auth.signOut();
    }

    // onSnapshot means: run every time data changes (firebase real-time data)
    // that's why async is not needed
    subscribeToBookComments({bookId, onSnapshot}) {
        const bookRef = this.db.collection('books')
            .doc(bookId);
        return this.db.collection('comments')
            .where('book', '==', bookRef)
            .onSnapshot(onSnapshot)
    }
}

let firebaseInstance;

function getFirebaseInstance() {
    if (!firebaseInstance) {
        firebaseInstance = new Firebase();
        return firebaseInstance;
    } else if (firebaseInstance) {
        return firebaseInstance;
    } else {
        return null;
    }
}

export default getFirebaseInstance;

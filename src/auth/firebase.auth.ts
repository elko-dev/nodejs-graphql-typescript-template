import * as firebase from "firebase/app";
// For some reason have to do it this way? ¯\_(ツ)_/¯
require('firebase/auth');

import { Auth, AuthDetails } from './auth';

export default class FirebaseAuth implements Auth {

    constructor() {
    }

    public async registerUser(email: string, password: string): Promise<AuthDetails> {
        const firebaseUser: firebase.auth.UserCredential = await firebase.auth().createUserWithEmailAndPassword(email, password);
        const user: firebase.User | null = firebaseUser.user;
        if (!user) {
            console.error('User id not generated');
            Promise.reject();
        }
        return {
            id: user!.uid
        };
    }

}
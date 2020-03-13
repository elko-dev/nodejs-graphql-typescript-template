import * as FirebaseAdmin from 'firebase-admin';
import { Auth, AuthDetails } from './auth';

FirebaseAdmin.initializeApp();

export default class FirebaseAuth implements Auth {
    constructor(){
    }

    public async registerUser(email: string, password: string): Promise<AuthDetails>{
        const firebaseUser: FirebaseAdmin.auth.UserRecord = await FirebaseAdmin.auth().createUser({ email: email, password: password });
        return {
            id: firebaseUser.uid
        };
    }

}
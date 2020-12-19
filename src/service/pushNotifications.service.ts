import PushNotifications from 'node-pushnotifications';
import Logger from '../Logger/Logger';

export default class PushNotificationService {

    private readonly settings = {
        // android
        gcm: {
            id: process.env.FIREBASE_APP_SERVER_KEY,
        },
        // ios
        apn: {
            token: {
                key: `-----BEGIN PRIVATE KEY-----\n${process.env.IOS_PUSH_KEY}\n-----END PRIVATE KEY-----`,
                keyId: process.env.IOS_PUSH_KEY_ID,
                teamId: process.env.IOS_TEAM_ID,
            },
            production: true // true for APN production environment, false for APN sandbox environment,
        },
        isAlwaysUseFCM: false, // true all messages will be sent through node-gcm (which actually uses FCM)
    };
    private readonly push = new PushNotifications(this.settings);


    public sendNotification = async (tokens: string[], data: PushNotifications.Data) => {
        const results = await this.push.send(tokens, data);
        Logger.log('Sending push notification ', { data });
        Logger.log({ results });
        return results;
    };
}
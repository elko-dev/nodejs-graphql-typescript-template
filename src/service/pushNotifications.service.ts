import PushNotifications from 'node-pushnotifications';
import Log from '../logger/Logger';
import NotificationObject from "../models/notification.object";
import {MutationSendPushNotificationsArgs} from "../graphql/generated";

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
        //Web
        web: {
            vapidDetails: {
                subject: '< \'mailto\' Address or URL >',
                publicKey: '< URL Safe Base64 Encoded Public Key >',
                privateKey: '< URL Safe Base64 Encoded Private Key >',
            },
            gcmAPIKey: 'gcmkey',
            TTL: 2419200,
            contentEncoding: 'aes128gcm',
            headers: {}
        },
        isAlwaysUseFCM: false, // true all messages will be sent through node-gcm (which actually uses FCM)
    };
    private readonly push = new PushNotifications(this.settings as PushNotifications.Settings);


    public sendNotification = async (tokens: string[], data: NotificationObject) => {
        const results = await this.push.send(tokens, data.data as PushNotifications.Data);
        Log.log('Sending push notification ', {data});
        Log.log({results});
        return results;
    };

    public static inputArgsToNotificationObject(args: MutationSendPushNotificationsArgs): NotificationObject {
        const title = args.title;
        const message = args.message;
        const topic = args.topic || '';
        const sound = args.sound || false;
        const pushIconUrl = args.pushIconUrl || '';
        const androidColor = args.androidNotificationColor || '';
        const androidNotificationChannel = args.androidNotificationChannel || '';
        const androidImageUrl = args.androidImageUrl || '';

        const notification: NotificationObject = new NotificationObject({
            title,
            message,
            topic,
            sound,
            pushIconUrl,
            androidColor,
            androidNotificationChannel,
            androidImageUrl
        });

        return notification;
    }
}
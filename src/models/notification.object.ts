export default class NotificationObject {
    public readonly title: string = '';
    public readonly message: string = '';
    public readonly topic: string = '';
    public readonly pushIconUrl: string = '';
    public readonly sound: string | false = false;
    public readonly androidImageUrl: string = '';
    public readonly androidColor: string = '';
    public readonly androidNotificationChannel: string = '';

    public constructor(params: Partial<NotificationObject> = {}) {
        const {title, message, topic, pushIconUrl, sound, androidColor, androidImageUrl, androidNotificationChannel} = params;
        this.title = title!;
        this.message = message!;
        this.topic = topic || '';
        this.pushIconUrl = pushIconUrl || '';
        this.sound = sound || false;
        this.androidColor = androidColor || '';
        this.androidImageUrl = androidImageUrl || '';
        this.androidNotificationChannel = androidNotificationChannel || '';

    }

    public data = {
        title: this.title, // REQUIRED for Android
        topic: this.topic || '', // REQUIRED for iOS (apn and gcm)
        /* The topic of the notification. When using token-based authentication, specify the bundle ID of the app.
         * When using certificate-based authentication, the topic is usually your app's bundle ID.
         * More details can be found under https://developer.apple.com/documentation/usernotifications/setting_up_a_remote_notification_server/sending_notification_requests_to_apns
         */
        body: this.message,
        priority: 'high', // gcm, apn. Supported values are 'high' or 'normal' (gcm). Will be translated to 10 and 5 for apn. Defaults to 'high'
        collapseKey: '', // gcm for android, used as collapseId in apn
        contentAvailable: true, // gcm, apn. node-apn will translate true to 1 as required by apn.
        delayWhileIdle: true, // gcm for android
        restrictedPackageName: '', // gcm for android
        dryRun: false, // gcm for android
        icon: this.pushIconUrl || '', // gcm for android
        image: this.androidImageUrl || '', // gcm for android
        style: '', // gcm for android
        picture: '', // gcm for android
        tag: '', // gcm for android
        color: this.androidColor || '', // gcm for android
        clickAction: '', // gcm for android. In ios, category will be used if not supplied
        locKey: '', // gcm, apn
        locArgs: '', // gcm, apn
        titleLocKey: '', // gcm, apn
        titleLocArgs: '', // gcm, apn
        retries: 1, // gcm, apn
        encoding: '', // apn
        badge: 1, // gcm for ios, apn
        sound: !!this.sound || 'ping.aiff', // gcm, apn
        android_channel_id: this.androidNotificationChannel || '', // gcm - Android Channel ID
        notificationCount: 0, // fcm for android. badge can be used for both fcm and apn
        alert: { // apn, will take precedence over title and body
            title: this.title,
            body: this.message,
            // details: https://github.com/node-apn/node-apn/blob/master/doc/notification.markdown#convenience-setters
        },
        silent: !!this.sound, // apn, will override badge, sound, alert and priority if set to true
        /*
         * A string is also accepted as a payload for alert
         * Your notification won't appear on ios if alert is empty object
         * If alert is an empty string the regular 'title' and 'body' will show in Notification
         */
        // alert: '',
        launchImage: '', // apn and gcm for ios
        action: '', // apn and gcm for ios
        category: '', // apn and gcm for ios
        // mdm: '', // apn and gcm for ios. Use this to send Mobile Device Management commands.
        // https://developer.apple.com/library/content/documentation/Miscellaneous/Reference/MobileDeviceManagementProtocolRef/3-MDM_Protocol/MDM_Protocol.html
        urlArgs: '', // apn and gcm for ios
        truncateAtWordEnd: true, // apn and gcm for ios
        mutableContent: 0, // apn
        threadId: '', // apn
        pushType: undefined, // apn. valid values are 'alert' and 'background' (https://github.com/parse-community/node-apn/blob/master/doc/notification.markdown#notificationpushtype)
        expiry: Math.floor(Date.now() / 1000) + 28 * 86400, // unit is seconds. if both expiry and timeToLive are given, expiry will take precedence
        timeToLive: 28 * 86400,
        headers: [], // wns
        launch: '', // wns
        duration: '', // wns
        consolidationKey: 'my notification', // ADM
    };
}
import PushNotificationService from "../../service/pushNotifications.service";
import {BooleanResponse, MutationPushNotificationArgs} from "../../graphql/generated";
import NotificationObject from "../../models/notification.object";

export const postPushNotification = {
  async sendPushNotifications(_, args: MutationPushNotificationArgs): Promise<BooleanResponse> {
    try {
      const pushNotificationService: PushNotificationService = new PushNotificationService();
      const notificationObject:NotificationObject = pushNotificationService.inputArgsToNotificationObject(args);

      await pushNotificationService.sendNotification(args.tokens, notificationObject);

      return {
        response: true,
        errors: []
      };
    }
    catch (error) {
      console.log(error);
      return {
        response: false,
        errors: [createError(error)]
      };
    }
  },

};

function createError(error: any): Error {
  return {
    name: error.name,
    message: error
  };
}
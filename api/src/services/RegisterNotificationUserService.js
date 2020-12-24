const NotificationUser = require("../schemas/NotificationUser");

class RegisterNotificationUserService {

  async execute(user_id, notification_user_id, push_token) {
    const existentUserNotification = await NotificationUser.findOne({
      user_id,
      notification_user_id
    })

    if(existentUserNotification) {
      existentUserNotification.active = true;
      await existentUserNotification.save();
      // throw new Error('O usuário já possui este token de notificações ativo!');
    }
    
    const notificationUser =  await NotificationUser.create({
      user_id,
      notification_user_id,
      push_token
    })

    return notificationUser;

  }

}

module.exports = RegisterNotificationUserService;
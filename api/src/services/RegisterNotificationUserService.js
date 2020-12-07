const NotificationUser = require("../schemas/NotificationUser");

class RegisterNotificationUserService {

  async execute(user_id, notification_user_id, push_token) {
    
    const notificationUser =  await NotificationUser.create({
      user_id,
      notification_user_id,
      push_token
    })

    return notificationUser;

  }

}

module.exports = RegisterNotificationUserService;
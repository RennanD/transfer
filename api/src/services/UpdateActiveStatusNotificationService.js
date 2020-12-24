const NotificationUser = require("../schemas/NotificationUser");

class UpdateActiveStatusNotificationService {
  async execute(user_id, notification_user_id, active_status) {
    console.log(user_id, notification_user_id, active_status)
    const notificationUser = await NotificationUser.findOne({ 
      user_id, 
      notification_user_id 
    });

    if(!notificationUser) {
      throw new Error('Não foi encontrado um usuário');
    }

    notificationUser.active = active_status;

    await notificationUser.save();

    console.log(notificationUser);

    return notificationUser;
  }
}

module.exports = UpdateActiveStatusNotificationService;
const NotificationUser = require("../schemas/NotificationUser");

class UpdateActiveStatusNotificationService {
  async execute(user_id, notification_user_id, active_status) {
    const notificationUser = await NotificationUser.findOne({ user_id, notification_user_id });

    notificationUser.active = active_status;

    await notificationUser.save();

    return notificationUser;
  }
}

module.exports = UpdateActiveStatusNotificationService;
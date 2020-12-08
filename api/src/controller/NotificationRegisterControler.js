const RegisterNotificationUserService = require("../services/RegisterNotificationUserService");
const UpdateActiveStatusNotificationService = require('../services/UpdateActiveStatusNotificationService')

class NotificationRegisterController {

  async store(request, response) {
    const { user_id, notification_user_id, push_token } = request.body;

    const registerNotification = new RegisterNotificationUserService();

    try {
      await registerNotification.execute(user_id, notification_user_id, push_token);
    
      return response.status(201).send();
    } catch (err) {
      return response.status(400).json({error: err.message})
    }
  }

  async update(request, response) {
    const { user_id, notification_user_id, active_status } = request.body;

    const updateStatus = new UpdateActiveStatusNotificationService();

    const updatedNotificationUser = await updateStatus.execute(
      user_id, 
      notification_user_id, 
      active_status
    );

    return response.json(updatedNotificationUser)

  }

}

module.exports = NotificationRegisterController;
const RegisterNotificationUserService = require("../services/RegisterNotificationUserService");

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

}

module.exports = NotificationRegisterController;
const { Router } = require('express');

const NotificationRegisterControler = require('../controller/NotificationRegisterControler');

const notificationsRouter = Router();
const notificationRegisterControler = new NotificationRegisterControler();

notificationsRouter.post('/register', notificationRegisterControler.store);

module.exports = notificationsRouter;
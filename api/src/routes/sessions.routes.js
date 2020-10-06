const { Router } = require('express');

const SessionsController = require('../controller/SessionController');

const sessionsRouter = Router();
const sessionsController = new SessionsController();

sessionsRouter.post('/', sessionsController.store);

module.exports = sessionsRouter;
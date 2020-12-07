const { Router } = require('express');

const accountRouter =  require('./account.routes');
const notificationsRouter = require('./notifications.routes');
const sessionsRouter = require('./sessions.routes');
const transactionRouter = require('./transactions.routes');
const walletRouter = require('./wallet.routes');

const routes = Router();

routes.use('/accounts', accountRouter);
routes.use('/sessions', sessionsRouter);
routes.use('/transactions', transactionRouter);
routes.use('/notifications', notificationsRouter);
routes.use('/wallet', walletRouter);

module.exports = routes;
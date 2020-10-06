const { Router } = require('express');

const accountRouter =  require('./account.routes');
const sessionsRouter = require('./sessions.routes');
const transactionRouter = require('./transactions.routes');

const routes = Router();

routes.use('/accounts', accountRouter);
routes.use('/sessions', sessionsRouter);
routes.use('/transactions', transactionRouter);

module.exports = routes;
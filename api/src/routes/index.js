const { Router } = require('express');

const accountRouter =  require('./account.routes');
const sessionsRouter = require('./sessions.routes');

const routes = Router();

routes.use('/accounts', accountRouter);
routes.use('/sessions', sessionsRouter);

module.exports = routes;
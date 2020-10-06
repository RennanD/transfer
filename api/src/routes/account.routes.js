const { Router } = require('express');

const AccountController = require('../controller/AccountController');

const accountRouter = Router();
const accountController = new AccountController();

accountRouter.post('/', accountController.store);

module.exports = accountRouter;
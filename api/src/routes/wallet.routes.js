const { Router } = require('express');

const WalletController = require('../controller/WalletController');

const walletRouter = Router();
const walletController = new WalletController();

walletRouter.post('/', walletController.store);

module.exports = walletRouter;
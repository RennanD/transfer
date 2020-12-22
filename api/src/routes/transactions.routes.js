const { Router } = require('express');

const TransactionController = require('../controller/TransactionController');

const transactionRouter = Router();
const transactionController = new TransactionController();

transactionRouter.get('/', transactionController.index);
transactionRouter.get('/:transaction_id', transactionController.show)
transactionRouter.post('/:transferKey', transactionController.store);

module.exports = transactionRouter;
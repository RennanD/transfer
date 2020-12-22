const CreateTransactionService = require("../services/CreateTransactionService");
const ListTransactionsService = require("../services/ListTransactionsService");
const ShowTransactionService = require("../services/ShowTransactionService");

class TransactionController {

  async index(request, response) {
    const { user_id } = request.headers;
    const listTransactions = new ListTransactionsService();

    const transactions = await listTransactions.execute(user_id)

    return response.json(transactions)
  }

  async show(request, response) {
    const { transaction_id } = request.params;

    try {
      const showTransaction = new ShowTransactionService();

      const transaction = await showTransaction.execute(transaction_id);

      return response.json(transaction);
    } catch (error) {
      return response.status(400).json(error.message);
    }

  }

  async store(request, response) {
    const { value, type, author_id } = request.body;

    const { transferKey } = request.params

    const createTransaction = new CreateTransactionService();

    try {
      const transction = await createTransaction.execute({
        author_id,
        type,
        transferKey,
        value
      });
    
      return response.status(201).json(transction);
    } catch (err) {
      return response.status(400).json({error: err.message})
    }
  }

}

module.exports = TransactionController;
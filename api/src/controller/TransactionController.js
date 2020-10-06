const CreateTransactionService = require("../services/CreateTransactionService");

class TransactionController {

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
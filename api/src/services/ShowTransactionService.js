const Transaction = require('../schemas/Transaction');

class ShowTransactionService {
  async execute(transaction_id) {
    const transaction = await Transaction
      .findById(transaction_id)
      .populate('author_id')
      .populate('recipient_id');

    if(!transaction) {
      throw new Error('Transferência não encontrada.')
    }

    return transaction;
  }
}

module.exports = ShowTransactionService;
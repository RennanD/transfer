const Transaction = require("../schemas/Transaction");

class ListTransactionsService {

  async execute(user_id) {
    const outcomeTransactions = await Transaction
      .find({author_id: user_id, type: 'outcome'})
      .populate('recipient_id')
      .sort({createdAt: -1});

    const incomeTransactions = await Transaction
      .find({recipient_id: user_id, type: 'income'})
      .populate('author_id')
      .sort({
        createdAt: -1
      });

    const myTransactions = [...outcomeTransactions, ...incomeTransactions];

    return myTransactions;

  }

}

module.exports = ListTransactionsService;
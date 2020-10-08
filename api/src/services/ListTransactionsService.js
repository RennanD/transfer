const Transaction = require("../schemas/Transaction");

class ListTransactionsService {

  async execute(user_id) {
    const outcomeTransactions = await Transaction.find({author_id: user_id, type: 'outcome'});
    const incomeTransactions = await Transaction.find({recipient_id: user_id, type: 'income'});

    const myTransactions = [...outcomeTransactions, ...incomeTransactions];

    return myTransactions.sort((bigger, smaller) => {
      return bigger.date - smaller.date
    })

  }

}

module.exports = ListTransactionsService;
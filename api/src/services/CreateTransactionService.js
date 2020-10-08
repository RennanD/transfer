const Transaction = require('../schemas/Transaction');
const User = require('../schemas/User');
const Wallet = require('../schemas/Wallet');

class CreateTransactionService {
  async execute({value, type, author_id, transferKey}) {
    const author = await User.findById(author_id);
    
    const authorWallet = await Wallet.findById(author.wallet_id);
    const userWallet = await Wallet.findOne({ transferKey });
    
    if(!userWallet) {
      throw new Error('A chave de transferência é inválida.')
    }

    const user = await User.findOne({ wallet_id: userWallet._id })
    
    if(type === 'outcome' && value > authorWallet.balance) {
      throw new Error('Você não possui saudo')
    }
  

    authorWallet.balance -= value;
    userWallet.balance += value;
    
    console.log(userWallet);

    await authorWallet.save();
    await userWallet.save();
    
    const userTransaction = await Transaction.create({
      type: 'income',
      value,
      date: new Date(),
      author_id,
      recipient_id: user._id
    })

    const authorTransaction = await Transaction.create({
      type,
      value,
      date: new Date(),
      author_id,
      recipient_id: user._id
    })
    
    user.transactions.push(userTransaction._id);
    author.transactions.push(authorTransaction._id);

    await user.save();
    await author.save();

    return authorTransaction;

  }
}

module.exports = CreateTransactionService;
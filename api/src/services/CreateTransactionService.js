const Transaction = require('../schemas/Transaction');
const User = require('../schemas/User');
const Wallet = require('../schemas/Wallet');
const OneSignal = require('onesignal-node');
const NotificationUser = require('../schemas/NotificationUser');

const formatValue = require('../utils/formatValue');

class CreateTransactionService {
  async execute({value, type, author_id, transferKey}) {

    try {
      const author = await User.findById(author_id);

      const notificationClient = new OneSignal.Client(
        '22cf3141-a541-4180-b570-007f0da89c2e',
        'MWQ1ZGFlOTktOTA1Mi00MGE1LWFhYmItYTAyYzAzY2NiMDVi'
      );
      
      const authorWallet = await Wallet.findById(author.wallet_id);
      const userWallet = await Wallet.findOne({ transferKey });
      
      if(!userWallet) {
        throw new Error('A chave de transferência é inválida.')
      }

      const user = await User.findOne({ wallet_id: userWallet._id })
      
      if(type === 'outcome' && value > authorWallet.balance) {
        throw new Error('Você não possui saldo suficiente.')
      }

      authorWallet.balance -= value;
      userWallet.balance += value;
      
      // console.log(userWallet);

      await authorWallet.save();
      await userWallet.save();
      

      const userNotification = await NotificationUser.findOne({
        user_id: user._id,
        active: true
      })

      console.log(userNotification)

      const notification = {
        headings: {
          'en': 'Nova transferência recebida'
        },
        contents: {
          'en': `${author.name} fez uma transferência no valor de ${formatValue(value)}`,
        },
        channel_for_external_user_ids: "push",
        include_player_ids: [userNotification.notification_user_id]
      };

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

      const response = await notificationClient.createNotification(notification);
      console.log(response);

      return authorTransaction;
    } catch (error) {
      console.log(error)
    }

  }
}

module.exports = CreateTransactionService;
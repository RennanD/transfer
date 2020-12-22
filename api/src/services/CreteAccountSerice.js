const User = require('../schemas/User');
const Wallet = require('../schemas/Wallet');

class CreteAccountSerice {

  async execute(name, email, transferKey) {

    const checkTransferKey = await Wallet.findOne({ transferKey });

    if(checkTransferKey) {
      throw new Error('Esta chave já cadastrada');
    }

    const wallet = await Wallet.create({
      transferKey,
      balance: 1000
    })

    const checkUser = await User.findOne({ email });

    if(checkUser) {
      throw new Error('O usuário já possui uma conta');
    }

    const user = await User.create({
      name,
      email,
      wallet_id: wallet._id
    });

    return user;
  }

}

module.exports = CreteAccountSerice;
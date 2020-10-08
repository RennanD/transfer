const User = require("../schemas/User");
const Wallet = require("../schemas/Wallet");

class ShowMyWalletService {
  async execute(user_id) {
    const user = await User.findById(user_id);

    const wallet = await Wallet.findById(user.wallet_id);

    return wallet;
  }
}

module.exports = ShowMyWalletService;
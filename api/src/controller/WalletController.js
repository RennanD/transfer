const ShowMyWalletService = require("../services/ShowMyWalletService");


class WalletController {

  async store(request, response) {
    const { user_id } = request.headers;

    const showWallet = new ShowMyWalletService();

    const myWallet = showWallet.execute(user_id);

    return myWallet;
  }

}

module.exports = WalletController;
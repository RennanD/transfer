const ShowMyWalletService = require("../services/ShowMyWalletService");


class WalletController {

  async store(request, response) {
    const { user_id } = request.headers;

    const showWallet = new ShowMyWalletService();

    const myWallet = await showWallet.execute(user_id);

    return response.json(myWallet);
  }

}

module.exports = WalletController;
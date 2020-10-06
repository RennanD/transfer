const CreteAccountSerice = require("../services/CreteAccountSerice");

class AccountController {

  async store(request, response) {
    const { name,email, transferKey } = request.body;

    const createAccount = new CreteAccountSerice();

    try {
      await createAccount.execute(name, email, transferKey);
    
      return response.status(201).send();
    } catch (err) {
      return response.status(400).json({error: err.message})
    }
  }

}

module.exports = AccountController;
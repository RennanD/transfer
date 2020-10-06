const AuthenticateUserService = require("../services/AuthenticateUserService");

class SessionController {

  async store(request, response) {
    const { email } = request.body;

    const authUser = new AuthenticateUserService();

    try {
      const session = await authUser.execute(email);
    
      return response.status(201).json(session);
    } catch (err) {
      return response.status(400).json({error: err.message})
    }
  }

}

module.exports = SessionController;
const User = require('../schemas/User');
const Wallet = require('../schemas/Wallet');

class AuthenticateUserService {
 async execute(email) {
  const user = await User.findOne({ email });

   if(!user) {
     throw new Error('Usuário não encontrado');
   }

   const wallet = await Wallet.findById(user.wallet_id);

   console.log(user);

   return {
     user,
     wallet
   };
 }
}

module.exports = AuthenticateUserService
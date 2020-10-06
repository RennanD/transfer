const { Schema, model } = require('mongoose');

const WalletSchema = new Schema({
  balance: {
    type: String,
    required: true
  }, 
  transferKey: {
    type: String,
    required: true
  },
}, {
  timestamps: true
});

module.exports = model("Wallet", WalletSchema);
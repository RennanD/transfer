const { Schema, model } = require('mongoose');

const UserSchema = new Schema({

  name: {
    type: String,
    required: true
  }, 
  email: {
    type: String,
    required: true
  },
  transactions: [{
    type: Schema.Types.ObjectId,
    ref: 'Transaction',
  }],
  wallet_id: {
    type: Schema.Types.ObjectId
  }
}, {
  timestamps: true
});

module.exports = model("User", UserSchema);
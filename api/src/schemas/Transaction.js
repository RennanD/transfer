const { Schema, model } = require('mongoose');

const TransactionSchema = new Schema({
  type: {
    type: String,
    required: true
  }, 
  value: {
    type: Number,
    required: true
  },
  date: {
    type: Date,
    required: true
  },
  author: {
    type: Schema.Types.ObjectId,
    required: true
  }
}, {
  timestamps: true
});

module.exports = model("Transaction", TransactionSchema);
const { Schema, model } = require('mongoose');

const NotificationUserSchema = new Schema({

  user_id: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }, 
  notification_user_id: {
    type: String,
    required: true
  },
  push_token: {
    type: String,
    required: true
  },
  active: {
    type: Boolean,
    required: true,
    default: true
  }
}, {
  timestamps: true
});

module.exports = model("NotificationUser", NotificationUserSchema);
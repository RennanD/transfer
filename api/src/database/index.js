const mongoose = require('mongoose');

const database = mongoose.connect('mongodb://localhost:27017/youtube', {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: true
});

module.exports = database;
const mongoose = require('mongoose');

const didSchema = new mongoose.Schema({
  alias: String,
  identity: String,
  publicAddress: String,
  privateKey: String,
  
})

const Did = mongoose.model('did', didSchema);

module.exports = Did;
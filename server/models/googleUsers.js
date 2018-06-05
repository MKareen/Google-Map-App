const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const googleSchema = new Schema({
  googleId: String
});

mongoose.model('googleUsers', googleSchema); 
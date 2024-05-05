const mongoose = require('mongoose');
const moment = require('moment-timezone');

const userschema = new mongoose.Schema({
  name: { type: String, required: true },
  uniqueId: { type: String, required: true, unique: true },
  email: { type: String, required: true },
  cellphonenumber: { type: String, required: true },
  createdAt: { 
    type: Date, 
    default: () => moment.tz('Asia/Manila').add(8, 'hours').toDate() 
  }
});

const User = mongoose.model("User", userschema);

module.exports = User;

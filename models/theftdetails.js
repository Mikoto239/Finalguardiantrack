const mongoose = require('mongoose');
const moment = require('moment-timezone');

// Set default timezone
moment.tz.setDefault('Asia/Manila');

const theft= new mongoose.Schema({
  currentlatitude: Number,
  currentlongitude: Number,
  description:String,
  uniqueId: String,
  level:String,
  address:String,
  happenedAt: {
    type: Date,
 default: () => moment.tz('Asia/Manila').add(8, 'hours').toDate() 
  }
});

const TheftDetails = mongoose.model('theftstatus', theft);

module.exports = TheftDetails;

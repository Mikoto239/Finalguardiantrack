const mongoose = require('mongoose');
const moment = require('moment-timezone'); // Import the moment module

moment.tz.setDefault('Asia/Manila');

const arduinoDataSchema = new mongoose.Schema({
  vibrationDuration: String,
  level:String,
  latitude: Number,
  longitude: Number,
  uniqueId: String,
  address:String,
  vibrateAt: {
    type: Date,
    default: () => moment.tz('Asia/Manila').add(8, 'hours').toDate() 
  }
});


const ArduinoData = mongoose.model('ArduinoData', arduinoDataSchema);

module.exports = ArduinoData;

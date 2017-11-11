const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/customers');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('mongoose connected!')
});
var customerSchema = mongoose.Schema({
    name: String,
    numPeople: String,
    phoneNumber: String,
    isSeated: Boolean,
    isWaiting: Boolean
})
var Customer = mongoose.model('Customer', customerSchema);
// Customer.create({
//     name: 'Bob',
//     numPeople: '4',
//     phoneNumber: 'w34443543',
//     isSeated: false,
//     isWaiting: true
// })
module.exports.addToDB = (personObj, callback) => {Customer.create(personObj), (err, result) => callback(err, result)}
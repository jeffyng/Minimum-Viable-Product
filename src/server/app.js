const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const db = require('../database/index');
const accountSid = require('./config').accountSid;
const authToken = require('./config').authToken;
const client = require('twilio')(accountSid, authToken);
const port = process.env.PORT || 3000;

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('../client')); //automatically grabs html and bundle.js

app.get('/list', function(req, res) {
    var dummyObject = {yoyoyyy: 'sfasfsfsfs'}
    db.findAll((err, result) => !err ? res.json(result) : res.json(err))
})
app.post('/text', function(req, res) {
    //req.body.phoneNumber = "14159876543"
    client.messages.create({
        to: req.body.phoneNumber,
        from: '16502765412', 
        body: `${req.body.name.toUpperCase()}, your table for ${req.body.numPeople} will be ready soon. Please be at the waiting area. Thank you!`
    })
    .then((message) => console.log(message.to))
    .catch(err => console.log('twilio err ', err));
    console.log('server: got your post /text request: ', req.body.phoneNumber);
})
app.post('/list/add', function(req, res) {
    db.addToDB(req.body);
    console.log("server: got your post add request :", req.body.phoneNumber);
})

app.post('/list/noshow', function(req, res) {
    var notWaiting = {isWaiting: false}
    db.updateDB(req.body, notWaiting);
    console.log('server: got your post noshow request: ', req.body.phoneNumber);
})

app.post('/list/seat', function(req, res) {
    var seated = {isSeated: true, isWaiting: false};
    db.updateDB(req.body, seated);
    console.log('server: got your post seat request:', req.body.phoneNumber);
})

app.listen(port, function(err){
    if(err) {
        console.log("There's an error! ", err)
    } else {
        console.log("Server is up and running! Listening to port: " + port);
    }
})
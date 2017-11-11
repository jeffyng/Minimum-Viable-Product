const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const port = process.env.PORT || 3000;

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('../client')); //automatically grabs html and bundle.js

app.get('/list', function(req, res) {
    var dummyObject = {yoyoyyy: 'sfasfsfsfs'}
    console.log('server: got your get /list request')
    res.json(dummyObject)
})
app.post('/text', function(req, res) {
    //req.body.phoneNumber = "4159876543"
    console.log('server: got your post /text request: ', req.body.phoneNumber);
})
app.post('/list/add', function(req, res) {
    console.log("server: got your post add request :", req.body.phoneNumber);
})

app.post('/list/noshow', function(req, res) {
    console.log('server: got your post noshow request: ', req.body.phoneNumber);
})

app.listen(port, function(err){
    if(err) {
        console.log("There's an error! ", err)
    } else {
        console.log("Server is up and running! Listening to port: " + port);
    }
})
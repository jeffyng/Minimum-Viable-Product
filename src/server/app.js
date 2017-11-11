const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const port = process.env.PORT || 3000;

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('../client')); //automatically grabs html and bundle.js

app.get('/list', function(req, res) {
    var dummyObject = {yoyoyyy: 'sfasfsfsfs'}
    res.json(dummyObject)
})


app.post('/list/add', function(req, res) {
    console.log("got your add :", req.body)
})
app.listen(port, function(err){
    if(err) {
        console.log("There's an error! ", err)
    } else {
        console.log("Server is up and running! Listening to port: " + port);
    }
})
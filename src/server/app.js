const express = require('express');
const app = express();
const path = require('path');

app.use(express.static('../client'))

app.get('/', function(req, res) {
    res.sendFile('index.html')
})

app.listen(3000, function(err){
    if(err) {
        console.log("There's an error! ", err)
    } else {
        console.log("Server is up and running!");
    }
})
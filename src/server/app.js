const express = require('express');
const app = express();

//automatically grabs html and bundle.js
app.use(express.static('../client'));

app.get('/list', function(req, res){

})

app.post('/list', function(req, res) {

})
app.listen(process.env.PORT || 3000, function(err){
    if(err) {
        console.log("There's an error! ", err)
    } else {
        console.log("Server is up and running!");
    }
})
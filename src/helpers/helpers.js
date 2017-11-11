var axios = require('axios');
var port = process.env.PORT || 3000;
var url = `localhost${port}/`;

var requestHelper = {
    getFirst: (callback) => {
        axios.get('/list')
        .then(response => callback(response.data))
        .catch(err => console.log('axios getfirst err ', err));
    },
    add: (newPerson) => {
        axios.post('/list/add', newPerson)
        .then(response => {
            console.log('axios posted!');
        })
        .catch(err => console.log('axios posting err ', err));
    },
    sendText: () =>{},
    noShow: () => {},
    seated: ()=>{} 
}
export default requestHelper;
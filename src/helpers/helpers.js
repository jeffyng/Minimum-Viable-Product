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
        .then(response => console.log('axios posted!'))
        .catch(err => console.log('axios posting err ', err));
    },
    sendText: (phoneNumber) => {
        axios.post('/text', {phoneNumber: phoneNumber})
        .then(response => console.log('axios sendText posted!'))
        .catch(err => console.log('axios sendText posting err ', err));
    },
    noShow: (phoneNumber) => {
        axios.post('list/noshow', {phoneNumber: phoneNumber})
        .then(response => console.log('axios noshow posted!'))
        .catch(err => console.log('axios noshow posting err ', err));
    },
    seat: (phoneNumber) => {
        axios.post('list/seat', {phoneNumber: phoneNumber})
        .then(response => console.log('axios seat posted!'))
        .catch(err => console.log('axios seat posting err ', err));
    } 
}
export default requestHelper;
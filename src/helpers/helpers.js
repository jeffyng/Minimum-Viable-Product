var axios = require('axios');
var port = process.env.PORT || 3000;
var url = `localhost${port}/`;

var requestHelper = {
    getFirst: () => {},
    add: (newPerson) => {
        newPerson.seated = false;
        newPerson.waiting = true;
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
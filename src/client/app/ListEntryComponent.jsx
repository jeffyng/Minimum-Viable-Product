import React from 'react';
import requestHelper from '../../helpers/helpers.js'


class ListEntryComponent extends React.Component {
    constructor(props) {
        super(props);
    }
     // text method- send post request to server, then server send request to api
    sendText() {
        var phoneNumber = this.props.person.phoneNumber;
        requestHelper.sendText(phoneNumber);
    }
      // no show method --deletes entry from state, send post request to server,
      //server tell database to switch waiting from True to False;
    noShow() {
        var phoneNumber = this.props.person.phoneNumber;
        requestHelper.noShow(phoneNumber);
        
    }
    // seated method - deletes entry from state, send post request to server,
    //server tell database to switch waiting from true to false and seated from false to true;
    seat() {
        var phoneNumber = this.props.person.phoneNumber;
        requestHelper.seat(phoneNumber);
    }
    removeFromList() {
        var oldState = this.props.getState();
        var phoneNumber = this.props.person.phoneNumber;
        var newState = oldState.filter(person => person.phoneNumber !== phoneNumber);
        this.props.changeState(newState);
    }

    render() {
        return (
            <li>
               {this.props.person.name} - {this.props.person.numPeople} people ----
               <button type='button' onClick={this.sendText.bind(this)}>Send Text</button>
               <button type='button' onClick={this.noShow.bind(this)}>No Show</button>
               <button type='button' onClick={this.seat.bind(this)}>Seated</button>
            </li>
        )
    }
}
export default ListEntryComponent;
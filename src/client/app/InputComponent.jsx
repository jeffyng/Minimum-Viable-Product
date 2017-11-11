import React from 'react';
import requestHelper from '../../helpers/helpers.js'
class InputComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            numPeople: '',
            phoneNumber: ''
        }
    }
      // add method - add to state, make post request to add entry to database
    addToList() {
        var newState = this.props.getState();
        var newPerson = {
            name: this.state.name,
            numPeople: this.state.numPeople,
            phoneNumber: this.state.phoneNumber,
            isSeated: false,
            isWaiting: true
        }
        newState.push(newPerson)
        requestHelper.add(newPerson);
        this.props.changeState(newState);
        this.setState({
            name: '',
            numPeople: '',
            phoneNumber: ''
        })
       
    }
    handleChange(e) {
        this.setState({
            [e.target.name] : e.target.value
        })
    }
    render() {
        return (
            <form>
                <input type='text' name='name' placeholder='Name' value={this.state.name} onChange={this.handleChange.bind(this)}/>
                <input type="text" name='numPeople'placeholder='Number of people' value={this.state.numPeople} onChange={this.handleChange.bind(this)}/>
                <input type='text' name='phoneNumber' placeholder='Phone Number' value={this.state.phoneNumber} onChange={this.handleChange.bind(this)}/>
                <button type='button' onClick={this.addToList.bind(this)}>Add</button>  
            </form>
        );
    }
}

export default InputComponent;
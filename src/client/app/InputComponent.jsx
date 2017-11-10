import React from 'react';

class InputComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            waitingList: []
        }
    }
    render() {
        return (
            <form>
                <input type='text' placeholder='Name' />
                <input type="text" placeholder='Number of people'/>
                <input type='text' placeholder='Phone Number'/>
                <input type='submit'/>    
            </form>
        );
    }
}

export default InputComponent;
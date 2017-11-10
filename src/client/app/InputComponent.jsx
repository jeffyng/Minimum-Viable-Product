import React from 'react';

class InputComponent extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <form>
                <input type='text' placeholder='Name' />
                <input type="text" placeholder='Number of people'/>
                <input type='text' placeholder='Phone Number'/>
                <button type='button'>Add</button>  
            </form>
        );
    }
}

export default InputComponent;
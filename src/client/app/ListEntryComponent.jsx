import React from 'react';

class ListEntryComponent extends React.Component {
    render(props) {
        return (
            <li>{this.props.person.name} - {this.props.person.numPeople}</li>
        )
    }
}
export default ListEntryComponent;
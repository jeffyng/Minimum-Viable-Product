import React from 'react';
import ListEntryComponent from './ListEntryComponent.jsx';

class ListComponent extends React.Component {
  
    render (props) {
        if (this.props.waitingList) {

            return (
            <ol>
                { 
                  this.props.waitingList.map(person => {
                      return <ListEntryComponent person={person} key={person.phoneNumber} changeState={this.props.changeState}/>
                  })
    
             
                }
    
            </ol>
            );
        }
    }
}

export default ListComponent;

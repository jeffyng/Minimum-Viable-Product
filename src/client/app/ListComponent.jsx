import React from 'react';
import ListEntryComponent from './ListEntryComponent.jsx';

class ListComponent extends React.Component {
  
    render (props) {
        return (
        <ol>
            {
              this.props.waitingList.map(person => {
                  return <ListEntryComponent person={person}/>
              })
            }

        </ol>
        );
    }
}

export default ListComponent;

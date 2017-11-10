import React from 'react';
import {render} from 'react-dom';
import InputComponent from './InputComponent.jsx';
import ListComponent from './ListComponent.jsx';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      waitingList: [
        {name: 'bob', numPeople: 2, phoneNumber: '4159876544'}, 
        {name: 'mary', numPeople: 5, phoneNumber: '6509387464'}
      ]
    }
  }
  render () {
    return <div>
        <h2> Waiting List </h2>
        <InputComponent/>
        <ListComponent waitingList={this.state.waitingList}/>
        </div>
  }
}

render(<App/>, document.getElementById('app'));
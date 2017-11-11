import React from 'react';
import {render} from 'react-dom';
import InputComponent from './InputComponent.jsx';
import ListComponent from './ListComponent.jsx';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      waitingList: [
        // {name: 'bob', numPeople: '2', phoneNumber: '4159876544'}, 
        // {name: 'mary', numPeople: '5', phoneNumber: '6509387464'}
      ]
    }
  }
  changeState(newState) {
    this.setState({
      waitingList: newState
    })
  }
  getState() {
    return this.state.waitingList;
  }

  // changestate method -

  //componentdidmount - get request from server - database-
  render () {
    return <div>
        <h2> Waiting List </h2>
        <InputComponent getState={this.getState.bind(this)} changeState={this.changeState.bind(this)}/>
        <ListComponent waitingList={this.state.waitingList} getState={this.getState.bind(this)} changeState={this.changeState.bind(this)}/>
        </div>
  }
}

render(<App/>, document.getElementById('app'));
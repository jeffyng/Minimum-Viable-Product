import React from 'react';
import {render} from 'react-dom';
import InputComponent from './InputComponent.jsx';
import ListComponent from './ListComponent.jsx';
import requestHelper from '../../helpers/helpers.js';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      waitingList: []
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

  componentDidMount() {
    requestHelper.getFirst(response => console.log(response));
  }
  render () {
    return <div>
        <h2> Waiting List </h2>
        <InputComponent getState={this.getState.bind(this)} changeState={this.changeState.bind(this)}/>
        <ListComponent waitingList={this.state.waitingList} getState={this.getState.bind(this)} changeState={this.changeState.bind(this)}/>
        </div>
  }
}

render(<App/>, document.getElementById('app'));
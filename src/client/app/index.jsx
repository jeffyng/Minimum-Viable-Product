import React from 'react';
import {render} from 'react-dom';
import InputComponent from './InputComponent.jsx';
import ListComponent from './ListComponent.jsx';

class App extends React.Component {
  render () {
    return <div>
        <h2> Waiting List </h2>
        <InputComponent/>
        <ListComponent/>
        </div>
  }
}

render(<App/>, document.getElementById('app'));
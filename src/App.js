import React, { Component } from 'react';
import './App.css';

import store from './store';
import * as actionCreators from './actions/actionCreators'

// Components
import ModalRoot from './ModalComponents';

console.log('old state', store.getState())

const props = {
  hey: 'hola',
  how: 'como estas'
};

function openModal(modalType, modalProps) {
  store.dispatch(actionCreators.showModal(modalType, modalProps));
}

function closeModal() {
  store.dispatch(actionCreators.closeModal());
}

class App extends Component {
  render() {
    return (
      <div store={store}>
        <button onClick={() => openModal('REACTIVATE', { message: 'reactivate message...' })}>Reactivate modal</button>
        <button onClick={() => openModal('DEACTIVATE', { message: 'deactivate message...' })}>Deactivate modal</button>
        <button onClick={() => openModal('HAPPY', { message: 'happy message...' })}>Happy modal</button>
        <button onClick={closeModal}>Close</button>
        <p>Modal content to appear below...</p>
        <div className="modal">
          <ModalRoot store={store} />
        </div>        
      </div>
    );
  }
}


export default App;

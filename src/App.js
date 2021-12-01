import React from 'react';

import Chat from './components/Chat';

import logo from './logo.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <Chat />
    </div>
  );
}

export default App;

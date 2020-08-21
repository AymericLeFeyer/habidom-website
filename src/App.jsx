import React from 'react';
import logo from './res/logo_habidom_seul.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          La domotique au coeur de votre habitation
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Work in Progress
        </a>
      </header>
    </div>
  );
}

export default App;

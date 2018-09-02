import React from 'react';
import logo from '../assets/logo.svg';
import { Link } from 'react-router-dom'

const Settings = () => (
  <div>
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <nav>
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/settings'>Settings</Link></li>
          <li><Link to='/play'>Play</Link></li>
        </ul>
      </nav>
      <h1 className="App-title">Welcome to FlappyBird</h1>
    </header>
    <h1>This will be the settings</h1>
  </div>
)

export default Settings;

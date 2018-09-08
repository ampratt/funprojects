import React from 'react';
import { Link } from 'react-router-dom'

const Settings = () => (
  <div>
    <h1>This will be the settings</h1>
    <Link className="settingsBtn" to='/'>Home</Link>
    <div className="menuSelectors">
    </div>
  </div>
)

export default Settings;

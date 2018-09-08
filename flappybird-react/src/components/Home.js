import React from 'react'
import { Link } from 'react-router-dom'
import PlayerSelector from './PlayerSelector'

const Home = () => (
  <div>
    <h1>Flappybird Heroes</h1>
    <Link className="settingsBtn" to='/settings'>Settings</Link>
    <div className="menuSelectors">
      <div className="playerSelectors">
        <PlayerSelector name={'batman'} />
        <PlayerSelector name={'unicorn'} />
      </div>
      <Link className="playBtn" to='/play'>Play</Link>
    </div>
  </div>
)

export default Home

  // <header className="App-header">
  //   <img src={logo} className="App-logo" alt="logo" />
  //   <nav>
  //     <ul>
  //       <li><Link to='/'>Home</Link></li>
  //       <li><Link to='/settings'>Settings</Link></li>
  //       <li><Link to='/play'>Play</Link></li>
  //     </ul>
  //   </nav>
  //   <h1 className="App-title">Welcome to FlappyBird</h1>
  // </header>

  // import React, { Component } from 'react';

// class Home extends Component {
//   render() {
//     return (
//       <div>
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <h1 className="App-title">Welcome to FlappyBird</h1>
//         </header>
//         <Main />
//       </div>
//     );
//   }
// }
// export default App;
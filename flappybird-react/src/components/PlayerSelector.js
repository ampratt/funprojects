import React from 'react';

function PlayerSelector(props) {
  return (
    <div className="playerSelector">
      <h2>{props.name}</h2>
    </div>
  );
}
// <img src={props.name} className="playerLogo" alt="player-logo" />

// class PlayerSelector extends Component {
//   render() {
//     return (
//       <div>
//         <img src={props.name} className="playerLogo" alt="player-logo" />
//         <h1>{props.name}</h1>
//       </div>
//     );
//   }
// }
export default PlayerSelector;

// const PlayerSelector = (props) => (
//   <div>
//     <img src={props.name} className="playerLogo" alt="player-logo" />
//     <h1>{props.name}</h1>
//   </div>
// )
